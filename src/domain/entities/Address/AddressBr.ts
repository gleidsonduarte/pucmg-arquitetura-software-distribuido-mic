import { AddressDefault } from "./AddressDefault";

export class AddressBr extends AddressDefault {
    constructor(address: any) {
        super();
        this.publicArea = address.logradouro;
        this.city = address.localidade;
        this.state = address.uf;
        this.postalCode = address.cep;
    }
}
