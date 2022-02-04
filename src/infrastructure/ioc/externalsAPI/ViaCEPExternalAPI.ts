import { AddressBr } from "../../../domain/entities/Address/AddressBr";

const axios = require('axios');

class ViaCEPExternalAPI {
    public async getDataAddress(postalCode: string) {
        return await axios.get(`https://viacep.com.br/ws/${postalCode}/json`)
            .then((response: any) => {
                if (response.data.erro) {
                    throw new Error;
                }

                return new AddressBr(response.data);
            })
            .catch((error: any) => {
                throw new Error('This address is invalid!');
            });
    }
}

export default new ViaCEPExternalAPI();
