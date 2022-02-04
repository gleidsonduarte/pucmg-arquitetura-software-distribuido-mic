import supertest from "supertest";
import App from "../../../../../src/app";
import Mongo from "../../../../../src/infrastructure/data/contexts/Mongo";
import { providerMapping } from "../../../../../src/infrastructure/data/mappings/ProviderMapping";

const request = supertest(App);
const providerMock = require("../../../../../__mocks__/entities/providerMock");
var provider: any;

beforeAll(async () => {
    provider = await providerMapping.findOne();
    if (provider == null) {
        provider = await providerMapping.create(providerMock);
        provider.created = true
    }
});

describe("Get Provider By First Name", () => {
    it("Should get provider by first name", async () => {
        const response = await request.get(`/v1/provider/first-name/${provider.firstName}`);

        if (provider.created) {
            await providerMapping.findByIdAndRemove(provider._id);
        }

        expect(response.status).toBe(200);
    });

    it("Shouldn't get provider by first name", async () => {
	    Mongo.close();

		const response = await request.get(`/v1/provider/first-name/${provider.firstName}`);

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("Error when searching provider for first name!");
	});
});
