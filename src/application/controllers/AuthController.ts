import { Request, Response } from 'express';
import AuthService from '../../service/services/AuthService';

class AuthController {
    public async register(request: Request, response: Response) {
        try {
            const result = await AuthService.registerUser(request.body);

            response.status(200).json({ data : result });
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message });
            }
        }
    }

    public async authenticate(request: Request, response: Response) {
        try {
            const result = await AuthService.authenticateUser(request.body);

            response.status(200).json({ data : result });
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message });
            }
        }
    }

    public async forgotPassword(request: Request, response: Response) {
        try {
            const result = await AuthService.userForgotPassword(request.body.email);

            response.status(200).json({ data : result });
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message });
            }
        }
    }

    public async resetPassword(request: Request, response: Response) {
        try {
            const result = await AuthService.resetUserPassword(request.body);

            response.status(200).json({ data : result });
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message });
            }
        }
    }
}

export default new AuthController();
