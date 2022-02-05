import { Request, Response } from 'express';
import AssociateService from '../../service/services/AssociateService';

class AssociateController {
    public async getAllAssociates(request: Request, response: Response) {
        try {
            const result = await AssociateService.getAllAssociates();

            response.status(200).json({ data : result });
        } catch (error) {
            response.status(400).json({ error: 'Error when searching for all associates!' });
        }
    }

    public async getAssociateById(request: Request, response: Response) {
        try {
            let id = String(request.params.id);
            const result = await AssociateService.getAssociateById(id);

            response.status(200).json({ data : result });
        } catch (error) {
            response.status(400).json({ error: 'Error when searching associate for id!' });
        }
    }

    public async saveAssociate(request: Request, response: Response) {
        try {
            const result = await AssociateService.saveAssociate(request.body);

            response.status(200).json({ data : result });
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message });
            }
        }
    }

    public async updateAssociateById(request: Request, response: Response) {
        try {
            const result = await AssociateService.updateAssociate(request.body);

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
            const result = await AssociateService.deleteAssociateById(id);

            response.status(200).json({ data : result });
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message });
            }
        }
    }
}

export default new AssociateController();
