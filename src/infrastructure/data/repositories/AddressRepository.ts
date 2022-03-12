import { AddressRepositoryInterface } from "../../../domain/interfaces/repositories/AddressRepositoryInterface";
import ViaCEPExternalAPI from "../../ioc/externalsAPI/ViaCEPExternalAPI";

class AddressRepository implements AddressRepositoryInterface {
    public async findAddresByPostalCode(postalCode: string) {
        return await ViaCEPExternalAPI.getDataAddress(postalCode);
    }
}

export default new AddressRepository();
