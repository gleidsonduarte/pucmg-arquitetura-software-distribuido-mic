import { AddressInterface } from "../entities/AddressInterface";

export interface AddressServiceInterface {
    getAddresByPostalCode(postalCode: string): Promise<AddressInterface>;
}
