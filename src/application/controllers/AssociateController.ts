import { Request, Response } from 'express';
import AssociateService from '../../service/services/AssociateService';

class AssociateController {
    public async getAllAssociates(request: Request, response: Response) {
        try {
            const result = await AssociateService.getAll();

            response.status(200).json({ data : result });
        } catch (error) {
            response.status(400).json({ error: 'Error when searching for all associates!' });
        }
    }

    public async getAssociateById(request: Request, response: Response) {
        try {
            let id = String(request.params.id);
            const result = await AssociateService.getById(id);

            response.status(200).json({ data : result });
        } catch (error) {
            response.status(400).json({ error: 'Error when searching associate for id!' });
        }
    }

    public async getAssociateByFirstName(request: Request, response: Response) {
        try {
            let firstName = request.params.firstName;
            const result = await AssociateService.getByFirstName(firstName);

            response.status(200).json({ data : result });
        } catch (error) {
            response.status(400).json({ error: 'Error when searching provider for first name!' });
        }
    }

    public async saveAssociate(request: Request, response: Response) {
        try {
            const result = await AssociateService.save(request.body);

            response.status(200).json({ data : result });
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message });
            }
        }
    }

    public async updateAssociateById(request: Request, response: Response) {
        try {
            const result = await AssociateService.update(request.body);

            response.status(200).json({ data : result });
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message });
            }
        }
    }

    public async deleteAssociate(request: Request, response: Response) {
        try {
            let id = String(request.body.id);
            const result = await AssociateService.deleteById(id);

            response.status(200).json({ data : result });
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message });
            }
        }
    }
}

export default new AssociateController();
