import supertest from "supertest";
import App from "../../../../src/app";
import Mongo from "../../../../src/infrastructure/data/contexts/Mongo";
import { userMapping } from "../../../../src/infrastructure/data/mappings/UserMapping";

const request = supertest(App);
const userMock = require("../../../../__mocks__/entities/userMock");

var token: any;

beforeAll(async () => {
    await userMapping.findOneAndRemove({ name: userMock.name });
    const responseAuth = await request.post("/v1/auth/register").send(userMock);
    token = responseAuth.body.data.token;

    Mongo.close();
});

describe("Address", () => {
    it("Should be return a valid postal code", async () => {
        const response = await request.get("/v1/address/postal-code/06040100")
            .auth(token, { type: 'bearer' });

        expect(response.status).toBe(200);
        expect(response.body.data).toHaveProperty('publicArea');
        expect(response.body.data).toHaveProperty('city');
        expect(response.body.data).toHaveProperty('state');
        expect(response.body.data).toHaveProperty('postalCode');
    });

    it("Should return an error saying the postal code is invalid numbers", async () => {
        const response = await request.get("/v1/address/postal-code/000000000")
            .auth(token, { type: 'bearer' });;

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
        expect(response.body.error).toEqual('Código postal com números inválidos!');
    });

    it("Should return an error saying the postal code is invalid", async () => {
        const response = await request.get('/v1/address/postal-code/00000000')
            .auth(token, { type: 'bearer' });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
        expect(response.body.error).toEqual('Endereço inválido!');
    });
});
