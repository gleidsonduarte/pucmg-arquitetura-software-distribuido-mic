import { User } from "../../domain/entities/User";

class UserValidator {
    public validateConstructor(user: User) {
        if (!user.name) {
            throw new Error('O nome não pode ser nulo ou vazio!');
        }

        if (!user.email) {
            throw new Error('O e-mail não pode ser nulo ou vazio!');
        }

        if (!user.password) {
            throw new Error('A senha não pode ser nula ou vazia!');
        }
    }
}

export default new UserValidator();
