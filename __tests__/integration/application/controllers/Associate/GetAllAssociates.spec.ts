import supertest from "supertest";
import App from "../../../../../src/app";
import Mongo from "../../../../../src/infrastructure/data/contexts/Mongo";
import { associateMapping } from "../../../../../src/infrastructure/data/mappings/AssociateMapping";
import { userMapping } from "../../../../../src/infrastructure/data/mappings/UserMapping";

const request = supertest(App);
const userMock = require("../../../../../__mocks__/entities/userMock");
const associateMock = require("../../../../../__mocks__/entities/associateMock");

var createdAssociateId: any;
var token: any;

beforeAll(async () => {
    await userMapping.findOneAndRemove({ name: userMock.name });
    const responseAuth = await request.post("/v1/auth/register").send(userMock);
    token = responseAuth.body.data.token;

    var thereAreAssociates = await associateMapping.find({ });
    if (!thereAreAssociates.length) {
        createdAssociateId = await associateMapping.create(associateMock)
    };
});

describe("Get All Associates", () => {
    it("Should get all associates", async () => {
        const response = await request.get("/v1/associate")
            .auth(token, { type: 'bearer' });

        if (createdAssociateId) {
            await associateMapping.findByIdAndRemove(createdAssociateId);
        }

        expect(response.status).toBe(200);
    });

    it("Shouldn't get all associates", async () => {
	    Mongo.close();

		const response = await request.get("/v1/associate")
            .auth(token, { type: 'bearer' });

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("Erro ao pesquisar por todos os associados!");
	});
});
