import { Request, Response } from 'express';
import ProviderService from '../../service/services/ProviderService';

class ProviderController {
    public async getAllProviders(request: Request, response: Response) {
        try {
            const result = await ProviderService.getAll();

            response.status(200).json({ data : result });
        } catch (error) {
            response.status(400).json({ error: 'Erro ao pesquisar por todos os prestadores!' });
        }
    }

    public async getProviderById(request: Request, response: Response) {
        try {
            let id = String(request.params.id);
            const result = await ProviderService.getById(id);

            response.status(200).json({ data : result });
        } catch (error) {
            response.status(400).json({ error: 'Erro ao pesquisar prestador pelo ID!' });
        }
    }

    public async getProviderByFirstName(request: Request, response: Response) {
        try {
            let firstName = request.params.firstName;
            const result = await ProviderService.getByFirstName(firstName);

            response.status(200).json({ data : result });
        } catch (error) {
            response.status(400).json({ error: 'Erro ao pesquisar prestador pelo primeiro nome!' });
        }
    }

    public async saveProvider(request: Request, response: Response) {
        try {
            const result = await ProviderService.save(request.body);

            response.status(200).json({ data : result });
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message });
            }
        }
    }

    public async updateProviderById(request: Request, response: Response) {
        try {
            const result = await ProviderService.update(request.body);

            response.status(200).json({ data : result });
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message });
            }
        }
    }

    public async deleteProvider(request: Request, response: Response) {
        try {
            let id = String(request.body.id);
            const result = await ProviderService.deleteById(id);

            response.status(200).json({ data : result });
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message });
            }
        }
    }
}

export default new ProviderController();
