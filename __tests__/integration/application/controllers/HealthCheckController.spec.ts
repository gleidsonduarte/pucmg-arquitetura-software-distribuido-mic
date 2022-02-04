import request from "supertest";
import App from "../../../../src/app";
import Mongo from "../../../../src/infrastructure/data/contexts/Mongo";

beforeAll(() => {
    Mongo.close();
});

describe("Health Check", () => {
    it("Should be return a valid health check", async () => {
        const response = await request(App).get("/v1/health-check");

        expect(response.status).toBe(200);
        expect(response.body.data).toHaveProperty('uptime');
        expect(response.body.data).toHaveProperty('message');
        expect(response.body.data).toHaveProperty('timestamp');
        expect(response.body.data).toHaveProperty('checks');
        expect(response.body.data.checks[0]).toHaveProperty('name');
        expect(response.body.data.checks[0]).toHaveProperty('type');
        expect(response.body.data.checks[0]).toHaveProperty('status');
    });
});
