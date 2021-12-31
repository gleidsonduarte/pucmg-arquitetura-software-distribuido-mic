import { Address } from './Address';
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
    public readonly birthDate: Date;
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
        this.birthDate = person.birthDate;
        this.gender = (<any>GenderEnum)[person.gender];
        this.maritalStatus = (<any>MaritalStatusEnum)[person.maritalStatus];
        this.education = (<any>EducationEnum)[person.education];
        this.address = new Address(person.address);
        this.contact = new Contact(person.contact);
    }
}
