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

    associate = await associateMapping.findOne();
    if (associate == null) {
        associate = await associateMapping.create(associateMock);
        associate.created = true
    }
});

describe("Get Associate By First Name", () => {
    it("Should get associate by first name", async () => {
        const response = await request.get(`/v1/associate/first-name/${associate.firstName}`)
            .auth(token, { type: 'bearer' });

        if (associate.created) {
            await associateMapping.findByIdAndRemove(associate._id);
        }

        expect(response.status).toBe(200);
    });

    it("Shouldn't get associate by first name", async () => {
	    Mongo.close();

		const response = await request.get(`/v1/associate/first-name/${associate.firstName}`)
            .auth(token, { type: 'bearer' });

	    expect(response.status).toBe(400);
        expect(response.body.error).toEqual("Erro ao pesquisar associado pelo primeiro nome!");
	});
});
