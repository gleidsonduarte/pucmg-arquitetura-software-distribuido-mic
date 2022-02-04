import supertest from "supertest";
import App from "../../../../../src/app";
import Mongo from "../../../../../src/infrastructure/data/contexts/Mongo";
import { associateMapping } from "../../../../../src/infrastructure/data/mappings/AssociateMapping";

const request = supertest(App);
const associateMock = require("../../../../../__mocks__/entities/associateMock");
var associate: any;

beforeAll(async () => {
    associate = await associateMapping.create(associateMock);
});

describe("Delete Associate", () => {
    it("Should delete associate", async () => {
        const response = await request.del("/v1/associate/delete").send({ "id": associate._id.toString() });

        expect(response.status).toBe(200);
    });

    it("Shouldn't delete associate without passing id", async () => {
	    Mongo.close();

		const response = await request.del("/v1/associate/delete").send({ "id": "" });

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("ID cannot be null or empty!");
	});

    it("Shouldn't delete associate without database connection", async () => {
	    Mongo.close();

		const response = await request.del("/v1/associate/delete").send({ "id": associate._id.toString() });

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("MongoClient must be connected to perform this operation");
	});
});
