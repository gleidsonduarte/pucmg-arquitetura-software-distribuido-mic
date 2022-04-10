import supertest from "supertest";
import App from "../../../../../src/app";
import Mongo from "../../../../../src/infrastructure/data/contexts/Mongo";
import { associateMapping } from "../../../../../src/infrastructure/data/mappings/AssociateMapping";
import { userMapping } from "../../../../../src/infrastructure/data/mappings/UserMapping";

const request = supertest(App);
const userMock = require("../../../../../__mocks__/entities/userMock");
const associateMock = require("../../../../../__mocks__/entities/associateMock");

var associate: any;
var token: any;

beforeAll(async () => {
    await userMapping.findOneAndRemove({ name: userMock.name });
    const responseAuth = await request.post("/v1/auth/register").send(userMock);
    token = responseAuth.body.data.token;

    associate = await associateMapping.create(associateMock);
});

describe("Delete Associate", () => {
    it("Should delete associate", async () => {
        const response = await request.del("/v1/associate")
            .auth(token, { type: 'bearer' })
            .send({ "id": associate._id.toString() });

        expect(response.status).toBe(200);
    });

    it("Shouldn't delete associate without passing id", async () => {
	    Mongo.close();

		const response = await request.del("/v1/associate")
            .auth(token, { type: 'bearer' })
            .send({ "id": "" });

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("ID não pode ser nulo ou vazio!");
	});

    it("Shouldn't delete associate without database connection", async () => {
	    Mongo.close();

		const response = await request.del("/v1/associate")
            .auth(token, { type: 'bearer' })
            .send({ "id": associate._id.toString() });

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("MongoClient must be connected to perform this operation");
	});
});
