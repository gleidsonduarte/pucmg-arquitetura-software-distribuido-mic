import HealthCheckController from "../../controllers/HealthCheckController";

const HealthCheckRoute = require('express').Router();

HealthCheckRoute.use('/v1/health-check', HealthCheckRoute);
HealthCheckRoute.get('', HealthCheckController.getStatusAPI);

export default HealthCheckRoute;
