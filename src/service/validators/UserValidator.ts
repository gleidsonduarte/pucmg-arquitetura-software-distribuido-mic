import { User } from "../../domain/entities/User";

class UserValidator {
    public validateConstructor(user: User) {
        if (!user.name) {
            throw new Error('Name cannot be null or empty!');
        }

        if (!user.email) {
            throw new Error('Email cannot be null or empty!');
        }

        if (!user.password) {
            throw new Error('Password cannot be null or empty!');
        }
    }
}

export default new UserValidator();
