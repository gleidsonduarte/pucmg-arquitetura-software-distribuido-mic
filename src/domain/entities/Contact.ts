import ContactValidator from "../../service/validators/ContactValidator";
import { ContactInterface } from "../interfaces/entities/ContactInterface";

export class Contact implements ContactInterface {
    public readonly phoneNumber: number;
    public readonly cellNumber: number;
    public readonly emailAddress: string;

    constructor(contact: any) {
        ContactValidator.validateConstructor(contact);

        this.phoneNumber = contact.phoneNumber;
        this.cellNumber = contact.cellNumber;
        this.emailAddress = contact.emailAddress;
     }
}
