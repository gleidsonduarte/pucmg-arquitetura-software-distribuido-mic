import supertest from "supertest";
import App from "../../../../../src/app";
import Mongo from "../../../../../src/infrastructure/data/contexts/Mongo";
import { providerMapping } from "../../../../../src/infrastructure/data/mappings/ProviderMapping";

const request = supertest(App);
const providerMock = require("../../../../../__mocks__/entities/providerMock");
var createdProviderId: any;

beforeAll(async () => {
    var thereAreProviders = await providerMapping.find({ });
    if (!thereAreProviders.length) {
        createdProviderId = await providerMapping.create(providerMock)
    };
});

describe("Get All Providers", () => {
    it("Should get all providers", async () => {
        const response = await request.get("/v1/provider/all");

        if (createdProviderId) {
            await providerMapping.findByIdAndRemove(createdProviderId);
        }

        expect(response.status).toBe(200);
    });

    it("Shouldn't get all providers", async () => {
	    Mongo.close();

		const response = await request.get("/v1/provider/all");

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("Error when searching for all providers!");
	});
});
