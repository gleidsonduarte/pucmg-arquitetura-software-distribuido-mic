import UserValidator from '../../service/validators/UserValidator';
import { UserInterface } from '../interfaces/entities/UserInterface';

export class User implements UserInterface {
    public readonly name: string;
    public readonly email: string;
    public readonly password: string;

    constructor(user: any) {
        UserValidator.validateConstructor(user);

        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }
}
