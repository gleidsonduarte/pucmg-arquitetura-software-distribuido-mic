import { Request, Response } from 'express';
import HealthCheckService from '../../service/services/HealthCheckService';

class HealthCheckController {
    public async getStatusAPI(request: Request, response: Response) {
        const result = await HealthCheckService.checkStatusAPI();
        response.status(200).json({ data : result });
    }
}

export default new HealthCheckController();
