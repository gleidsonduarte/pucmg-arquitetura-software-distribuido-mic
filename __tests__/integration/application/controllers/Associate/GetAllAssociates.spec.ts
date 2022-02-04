import supertest from "supertest";
import App from "../../../../../src/app";
import Mongo from "../../../../../src/infrastructure/data/contexts/Mongo";
import { associateMapping } from "../../../../../src/infrastructure/data/mappings/AssociateMapping";

const request = supertest(App);
const associateMock = require("../../../../../__mocks__/entities/associateMock");
var createdAssociateId: any;

beforeAll(async () => {
    var thereAreAssociates = await associateMapping.find({ });
    if (!thereAreAssociates.length) {
        createdAssociateId = await associateMapping.create(associateMock)
    };
});

describe("Get All Associates", () => {
    it("Should get all associates", async () => {
        const response = await request.get("/v1/associate/all");

        if (createdAssociateId) {
            await associateMapping.findByIdAndRemove(createdAssociateId);
        }

        expect(response.status).toBe(200);
    });

    it("Shouldn't get all associates", async () => {
	    Mongo.close();

		const response = await request.get("/v1/associate/all");

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("Error when searching for all associates!");
	});
});
