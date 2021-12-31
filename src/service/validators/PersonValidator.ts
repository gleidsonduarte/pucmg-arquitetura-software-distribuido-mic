import { Person } from "../../domain/entities/Person";

class PersonValidator {
    public validateConstructor(person: Person) {
        if (!person.firstName) {
            throw new Error('First name cannot be null or empty!');
        }

        if (!person.lastName) {
            throw new Error('Last name cannot be null or empty!');
        }

        if (!person.cpf) {
            throw new Error('CPF cannot be null or empty!');
        }

        if (!person.birthDate) {
            throw new Error('Birth date cannot be null or empty!');
        }

        if (!person.gender) {
            throw new Error('Gender cannot be null or empty!');
        }

        if (!person.maritalStatus) {
            throw new Error('Marital status cannot be null or empty!');
        }

        if (!person.education) {
            throw new Error('Education cannot be null or empty!');
        }

        if (!person.address) {
            throw new Error('Address cannot be null or empty!');
        }

        if (!person.contact) {
            throw new Error('Contact cannot be null or empty!');
        }
    }
}

export default new PersonValidator();
