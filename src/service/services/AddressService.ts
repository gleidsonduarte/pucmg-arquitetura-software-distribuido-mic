import { AddressServiceInterface } from "../../domain/interfaces/services/AddressServiceInterface";
import AddressRepository from "../../infrastructure/data/repositories/AddressRepository";
import AddressValidator from "../validators/AddressValidator";

class AddressService implements AddressServiceInterface {
    public async getAddresByPostalCode(postalCode: string) {
        AddressValidator.isValidBrPostalCode(postalCode);

        return await AddressRepository.findAddresByPostalCode(postalCode);
    }
}

export default new AddressService();
