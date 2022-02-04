import request from "supertest";
import App from "../../../../src/app";
import Mongo from "../../../../src/infrastructure/data/contexts/Mongo";

beforeAll(() => {
    Mongo.close();
});

describe("Address", () => {
    it("Should be return a valid postal code", async () => {
        const response = await request(App).get("/v1/address/postal-code/06040100");

        expect(response.status).toBe(200);
        expect(response.body.data).toHaveProperty('publicArea');
        expect(response.body.data).toHaveProperty('city');
        expect(response.body.data).toHaveProperty('state');
        expect(response.body.data).toHaveProperty('postalCode');
    });

    it("Should return an error saying the postal code is invalid numbers", async () => {
        const response = await request(App).get("/v1/address/postal-code/000000000");

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
        expect(response.body.error).toEqual('Postal code with invalid numbers!');
    });

    it("Should return an error saying the postal code is invalid", async () => {
        const response = await request(App).get("/v1/address/postal-code/00000000");

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
        expect(response.body.error).toEqual("This address is invalid!");
    });
});
