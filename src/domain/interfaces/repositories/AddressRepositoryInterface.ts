import { AddressInterface } from "../entities/AddressInterface";

export interface AddressRepositoryInterface {
    findAddresByPostalCode(postalCode: string): Promise<AddressInterface>;
}
