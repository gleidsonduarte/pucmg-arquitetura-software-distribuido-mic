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

    provider = await providerMapping.create(providerMock);
});

describe("Delete Provider", () => {
    it("Should delete provider", async () => {
        const response = await request.del("/v1/provider")
            .auth(token, { type: 'bearer' })
            .send({ "id": provider._id.toString() });

        expect(response.status).toBe(200);
    });

    it("Shouldn't delete provider without passing id", async () => {
	    Mongo.close();

		const response = await request.del("/v1/provider")
            .auth(token, { type: 'bearer' })
            .send({ "id": "" });

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("ID não pode ser nulo ou vazio!");
	});

    it("Shouldn't delete provider without database connection", async () => {
	    Mongo.close();

		const response = await request.del("/v1/provider")
            .auth(token, { type: 'bearer' })
            .send({ "id": provider._id.toString() });

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("MongoClient must be connected to perform this operation");
	});
});
