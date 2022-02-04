
import { AddressInterface } from "../../interfaces/entities/AddressInterface";

export class AddressDefault implements AddressInterface {
    public publicArea: string = '';
    public city: string = '';
    public state: string = '';
    public postalCode: string = '';
}
