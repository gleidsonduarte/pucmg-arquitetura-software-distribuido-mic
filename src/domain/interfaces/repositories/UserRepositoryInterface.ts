import { UserInterface } from "../entities/UserInterface";

export interface UserRepositoryInterface {
    findOneByEmail(email: string): Promise<UserInterface>;
    save(user: UserInterface): Promise<UserInterface>;
}
