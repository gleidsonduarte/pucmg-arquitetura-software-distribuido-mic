import AddressValidator from "../../../service/validators/AddressValidator";
import { AddressDefault } from "./AddressDefault";

export class Address extends AddressDefault {
    constructor(address: any) {
        super();
        AddressValidator.validateConstructor(address);

        this.publicArea = address.publicArea;
        this.city = address.city;
        this.state = address.state;
        this.postalCode = address.postalCode;
    }
}
