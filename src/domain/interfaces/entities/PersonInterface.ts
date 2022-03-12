import { EducationEnum } from "../../enums/EducationEnum";
import { GenderEnum } from "../../enums/GenderEnum";
import { MaritalStatusEnum } from "../../enums/MaritalStatusEnum";
import { AddressInterface } from "./AddressInterface";
import { ContactInterface } from "./ContactInterface";

export interface PersonInterface {
    id?: string;
    firstName: string;
    lastName: string;
    cpf: number;
    birthDate: string;
    gender: GenderEnum;
    maritalStatus: MaritalStatusEnum;
    education: EducationEnum;
    address: AddressInterface;
    contact: ContactInterface;
}
