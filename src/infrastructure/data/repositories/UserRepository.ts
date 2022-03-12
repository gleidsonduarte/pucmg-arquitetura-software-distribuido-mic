import { UserInterface } from "../../../domain/interfaces/entities/UserInterface";
import { UserRepositoryInterface } from "../../../domain/interfaces/repositories/UserRepositoryInterface";
import { userMapping } from "../mappings/UserMapping";

class UserRepository implements UserRepositoryInterface {
    public async findOneByEmail(email: string) {
        return await userMapping.findOne({
            email: { $regex: `.*${email}.*`, $options: 'i'}
        })
        .select('+password');
    }

    public async findOneByEmailWithPasswordReset(email: string) {
        return await userMapping.findOne({
            email: { $regex: `.*${email}.*`, $options: 'i'}
        })
        .select('+passwordResetToken passwordResetExpires');
    }

    public async save(user: UserInterface) {
        const newUser = await userMapping.create(user);
        newUser.password = undefined;
        return newUser;
    }

    public async saveResetPassword(userId: string, token: string, tokenExpirationHours: Date) {
        await userMapping.findByIdAndUpdate(
            userId,
            {
                '$set': {
                    passwordResetToken: token,
                    passwordResetExpires: tokenExpirationHours
                }
            },
            {new: true});
    }
}

export default new UserRepository();
