import Mongo from "../../infrastructure/data/contexts/Mongo";

class HealthCheckService {
    public async checkStatusAPI() {
        let mongoCheck = await Mongo.connectionStatus();

        const healthcheck = {
            uptime: process.uptime(),
            message: "OK",
            timestamp: Date.now(),
            checks: [
              {
                name: "MongoDB",
                type: "internal",
                status: mongoCheck,
              }
            ]
          };
        
        return healthcheck;
    }
}

export default new HealthCheckService();
