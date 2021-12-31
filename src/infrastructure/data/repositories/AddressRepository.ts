import ViaCEPExternalAPI from "../../ioc/externalsAPI/ViaCEPExternalAPI";

class AddressRepository {
    public async findAddresByPostalCode(postalCode: string) {
        return await ViaCEPExternalAPI.getDataAddress(postalCode);
    }
}

export default new AddressRepository();