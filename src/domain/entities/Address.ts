import AddressValidator from "../../service/validators/AddressValidator";
import { AddressInterface } from "../interfaces/entities/AddressInterface";

export class Address implements AddressInterface {
    public readonly publicArea: string;
    public readonly city: string;
    public readonly state: string;
    public readonly postalCode: string;

    constructor(address: any) {
        if (address.logradouro && address.localidade && address.uf && address.cep) {
            this.publicArea = address.logradouro;
            this.city = address.localidade;
            this.state = address.uf;
            this.postalCode = address.cep;
            return;
        }

        AddressValidator.validateConstructor(address);

        this.publicArea = address.publicArea;
        this.city = address.city;
        this.state = address.state;
        this.postalCode = address.postalCode;
    }
}
