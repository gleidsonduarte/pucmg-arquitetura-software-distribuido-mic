import { Person } from "../../domain/entities/Person";

class PersonValidator {
    public validateConstructor(person: Person) {
        if (!person.firstName) {
            throw new Error('Primeiro nome não pode ser nulo ou vazio!');
        }

        if (!person.lastName) {
            throw new Error('Último nome não pode ser nulo ou vazio!');
        }

        if (!person.cpf) {
            throw new Error('CPF não pode ser nulo ou vazio!');
        }

        if (!person.birthDate) {
            throw new Error('Data de nascimento não pode ser nulo ou vazio!');
        }

        if (!person.gender) {
            throw new Error('Sexo não pode ser nulo ou vazio!');
        }

        if (!person.maritalStatus) {
            throw new Error('Estado civil não pode ser nulo ou vazio!');
        }

        if (!person.education) {
            throw new Error('Educação não pode ser nula ou vazia!');
        }

        if (!person.address) {
            throw new Error('Endereço não pode ser nulo ou vazio!');
        }

        if (!person.contact) {
            throw new Error('Contato não pode ser nulo ou vazio!');
        }
    }
}

export default new PersonValidator();
