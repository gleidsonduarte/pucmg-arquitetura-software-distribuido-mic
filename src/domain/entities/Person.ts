import { Address } from './Address/Address';
import { Contact } from './Contact';
import { EducationEnum } from '../enums/EducationEnum';
import { GenderEnum } from '../enums/GenderEnum';
import { MaritalStatusEnum } from '../enums/MaritalStatusEnum';
import { PersonInterface } from '../interfaces/entities/PersonInterface';
import PersonValidator from '../../service/validators/PersonValidator';

export abstract class Person implements PersonInterface {
    public readonly id?: string;
    public readonly firstName: string;
    public readonly lastName: string;
    public readonly cpf: number;
    public readonly birthDate: string;
    public readonly gender: GenderEnum;
    public readonly maritalStatus: MaritalStatusEnum;
    public readonly education: EducationEnum;
    public readonly address: Address;
    public readonly contact: Contact;

    constructor(person: Person) {
        PersonValidator.validateConstructor(person);

        this.id = person.id;
        this.firstName = person.firstName;
        this.lastName = person.lastName;
        this.cpf = person.cpf;
        this.birthDate = new Date(person.birthDate).toLocaleDateString('en-br');
        this.gender = (<any>GenderEnum)[person.gender.toString().toUpperCase()];
        this.maritalStatus = (<any>MaritalStatusEnum)[person.maritalStatus.toString().toUpperCase()];
        this.education = (<any>EducationEnum)[person.education.toString().toUpperCase()];
        this.address = new Address(person.address);
        this.contact = new Contact(person.contact);
    }
}
