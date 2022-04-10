import supertest from "supertest";
import App from "../../../../../src/app";
import Mongo from "../../../../../src/infrastructure/data/contexts/Mongo";
import { providerMapping } from "../../../../../src/infrastructure/data/mappings/ProviderMapping";
import { userMapping } from "../../../../../src/infrastructure/data/mappings/UserMapping";

const request = supertest(App);
const userMock = require("../../../../../__mocks__/entities/userMock");
const providerMock = require("../../../../../__mocks__/entities/providerMock");

var createdProviderId: any;
var token: any;

beforeAll(async () => {
    await userMapping.findOneAndRemove({ name: userMock.name });
    const responseAuth = await request.post("/v1/auth/register").send(userMock);
    token = responseAuth.body.data.token;

    var thereAreProviders = await providerMapping.find({ });
    if (!thereAreProviders.length) {
        createdProviderId = await providerMapping.create(providerMock)
    };
});

describe("Get All Providers", () => {
    it("Should get all providers", async () => {
        const response = await request.get("/v1/provider")
            .auth(token, { type: 'bearer' });

        if (createdProviderId) {
            await providerMapping.findByIdAndRemove(createdProviderId);
        }

        expect(response.status).toBe(200);
    });

    it("Shouldn't get all providers", async () => {
	    Mongo.close();

		const response = await request.get("/v1/provider")
            .auth(token, { type: 'bearer' });

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("Erro ao pesquisar por todos os prestadores!");
	});
});
