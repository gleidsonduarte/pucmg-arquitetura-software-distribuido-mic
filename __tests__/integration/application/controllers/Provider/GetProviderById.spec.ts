import supertest from "supertest";
import App from "../../../../../src/app";
import Mongo from "../../../../../src/infrastructure/data/contexts/Mongo";
import { providerMapping } from "../../../../../src/infrastructure/data/mappings/ProviderMapping";
import { userMapping } from "../../../../../src/infrastructure/data/mappings/UserMapping";

const request = supertest(App);
const userMock = require("../../../../../__mocks__/entities/userMock");
const providerMock = require("../../../../../__mocks__/entities/providerMock");

var provider: any;
var token: any;

beforeAll(async () => {
    await userMapping.findOneAndRemove({ name: userMock.name });
    const responseAuth = await request.post("/v1/auth/register").send(userMock);
    token = responseAuth.body.data.token;

    provider = await providerMapping.findOne();
    if (provider == null) {
        provider = await providerMapping.create(providerMock);
        provider.created = true
    }
});

describe("Get Provider By Id", () => {
    it("Should get provider by id", async () => {
        const response = await request.get(`/v1/provider/id/${provider._id}`)
            .auth(token, { type: 'bearer' });

        if (provider.created) {
            await providerMapping.findByIdAndRemove(provider._id);
        }

        expect(response.status).toBe(200);
    });

    it("Shouldn't get provider by id", async () => {
	    Mongo.close();

		const response = await request.get(`/v1/provider/id/${provider._id}`)
            .auth(token, { type: 'bearer' });

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("Erro ao pesquisar prestador pelo ID!");
	});
});
