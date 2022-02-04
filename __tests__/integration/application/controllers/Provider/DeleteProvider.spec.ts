import supertest from "supertest";
import App from "../../../../../src/app";
import Mongo from "../../../../../src/infrastructure/data/contexts/Mongo";
import { providerMapping } from "../../../../../src/infrastructure/data/mappings/ProviderMapping";

const request = supertest(App);
const providerMock = require("../../../../../__mocks__/entities/providerMock");
var provider: any;

beforeAll(async () => {
    provider = await providerMapping.create(providerMock);
});

describe("Delete Provider", () => {
    it("Should delete provider", async () => {
        const response = await request.del("/v1/provider/delete").send({ "id": provider._id.toString() });

        expect(response.status).toBe(200);
    });

    it("Shouldn't delete provider without passing id", async () => {
	    Mongo.close();

		const response = await request.del("/v1/provider/delete").send({ "id": "" });

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("ID cannot be null or empty!");
	});

    it("Shouldn't delete provider without database connection", async () => {
	    Mongo.close();

		const response = await request.del("/v1/provider/delete").send({ "id": provider._id.toString() });

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("MongoClient must be connected to perform this operation");
	});
});
