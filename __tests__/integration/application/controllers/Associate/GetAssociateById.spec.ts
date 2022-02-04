import supertest from "supertest";
import App from "../../../../../src/app";
import Mongo from "../../../../../src/infrastructure/data/contexts/Mongo";
import { associateMapping } from "../../../../../src/infrastructure/data/mappings/AssociateMapping";

const request = supertest(App);
const associateMock = require("../../../../../__mocks__/entities/associateMock");
var associate: any;

beforeAll(async () => {
    associate = await associateMapping.findOne();
    if (associate == null) {
        associate = await associateMapping.create(associateMock);
        associate.created = true
    }
});

describe("Get Associate By Id", () => {
    it("Should get associate by id", async () => {
        const response = await request.get(`/v1/associate/id/${associate._id}`);

        if (associate.created) {
            await associateMapping.findByIdAndRemove(associate._id);
        }

        expect(response.status).toBe(200);
    });

    it("Shouldn't get associate by id", async () => {
	    Mongo.close();

		const response = await request.get(`/v1/associate/id/${associate._id}`);

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("Error when searching associate for id!");
	});
});
