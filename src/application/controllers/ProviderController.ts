import { Request, Response } from 'express';
import ProviderService from '../../service/services/ProviderService';

class ProviderController {
    public async getAllProviders(request: Request, response: Response) {
        try {
            const result = await ProviderService.getAllProviders();

            response.status(200).json({ data : result });
        } catch (error) {
            response.status(400).json({ error: 'Error when searching for all providers!' });
        }
    }

    public async getProviderById(request: Request, response: Response) {
        try {
            let id = String(request.params.id);
            const result = await ProviderService.getProviderById(id);

            response.status(200).json({ data : result });
        } catch (error) {
            response.status(400).json({ error: 'Error when searching provider for id!' });
        }
    }

    public async getProviderByFirstName(request: Request, response: Response) {
        try {
            let firstName = request.params.firstName;
            const result = await ProviderService.getProviderByFirstName(firstName);

            response.status(200).json({ data : result });
        } catch (error) {
            response.status(400).json({ error: 'Error when searching provider for first name!' });
        }
    }

    public async saveProvider(request: Request, response: Response) {
        try {
            const result = await ProviderService.saveProvider(request.body);

            response.status(200).json({ data : result });
        } catch (error: any) {
            response.status(400).json({ error: error.message });
        }
    }

    public async updateProviderById(request: Request, response: Response) {
        try {
            const result = await ProviderService.updateProvider(request.body);

            response.status(200).json({ data : result });
        } catch (error: any) {
            response.status(400).json({ error: error.message });
        }
    }

    public async deleteProvider(request: Request, response: Response) {
        try {
            let id = String(request.body.id);
            const result = await ProviderService.deleteProviderById(id);

            response.status(200).json({ data : result });
        } catch (error: any) {
            response.status(400).json({ error: error.message });
        }
    }
}

export default new ProviderController();
