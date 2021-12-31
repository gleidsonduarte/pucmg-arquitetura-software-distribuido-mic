import { Address } from "../../../domain/entities/Address";

const axios = require('axios');

class ViaCEPExternalAPI {
    public async getDataAddress(postalCode: string) {
        return await axios.get(`https://viacep.com.br/ws/${postalCode}/json`)
            .then((response: any) => {
                if (response.data.erro) {
                    return "This address doesn't exist!";
                }

                return new Address(response.data);
            })
            .catch((error: any) => {
                return 'This address is invalid!';
            });
    }
}

export default new ViaCEPExternalAPI();
