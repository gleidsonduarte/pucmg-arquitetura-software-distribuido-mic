import supertest from "supertest";
import App from "../../../../../src/app";
import Mongo from "../../../../../src/infrastructure/data/contexts/Mongo";
import { associateMapping } from "../../../../../src/infrastructure/data/mappings/AssociateMapping";

const request = supertest(App);
const associateMock = require("../../../../../__mocks__/entities/associateMock");

describe("Insert Associate", () => {
	it("Should be save a new associate", async () => {
		const response = await request.post("/v1/associate/save").send(associateMock);

		if (response.status === 200) {
			await associateMapping.findByIdAndDelete(response.body.data._id);
		}

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('data');
		expect(response.body.data).toHaveProperty('_id');
		expect(response.body.data).toHaveProperty('firstName');
		expect(response.body.data).toHaveProperty('lastName');
		expect(response.body.data).toHaveProperty('cpf');
		expect(response.body.data).toHaveProperty('birthDate');
		expect(response.body.data).toHaveProperty('gender');
		expect(response.body.data).toHaveProperty('maritalStatus');
		expect(response.body.data).toHaveProperty('education');
		expect(response.body.data).toHaveProperty('contact');
		expect(response.body.data.contact).toHaveProperty('phoneNumber');
		expect(response.body.data.contact).toHaveProperty('cellNumber');
		expect(response.body.data.contact).toHaveProperty('emailAddress');
		expect(response.body.data).toHaveProperty('address');
		expect(response.body.data.address).toHaveProperty('publicArea');
		expect(response.body.data.address).toHaveProperty('city');
		expect(response.body.data.address).toHaveProperty('state');
		expect(response.body.data.address).toHaveProperty('postalCode');
	});

	it("Shouldn't save a new associate", async () => {
	    Mongo.close();

		const response = await request.post("/v1/associate/save").send(associateMock);

		expect(response.status).toBe(400);
		expect(response.body.error).toEqual("MongoClient must be connected to perform this operation");
	});
});
