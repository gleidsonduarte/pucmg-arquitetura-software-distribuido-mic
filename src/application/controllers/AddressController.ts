import { Request, Response } from 'express';
import AddressService from '../../service/services/AddressService';

class AddressController {
    public async getAddress(request: Request, response: Response) {
        try {
            let postalCode = String(request.params.postalCode);
            const result = await AddressService.getAddresByPostalCode(postalCode);

            response.status(200).json({ data : result });
        } catch (error) {
            if (error instanceof Error) {
                response.status(400).json({ error: error.message });
            }
        }
    }
}

export default new AddressController();
