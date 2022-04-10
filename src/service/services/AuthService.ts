import { User } from "../../domain/entities/User";
import UserRepository from "../../infrastructure/data/repositories/UserRepository";
import EmailExternal from "../../infrastructure/ioc/externalsAPI/EmailExternal";


const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

class AuthService {
    public async registerUser(userParams: User) {
        let user = new User(userParams);

        let hasUser = await UserRepository.findOneByEmail(user.email);
        if (hasUser) {
            throw new Error('Usuário já existe!');
        }

        let newUser: any = UserRepository.save(user);
        return { user, token: this.generateToken(newUser.id) };
    }

    public async authenticateUser(userParams: any) {
        const { email, password } = userParams;

        if (!email) {
            throw new Error('O e-mail não pode ser nulo ou vazio!');
        }

        if (!password) {
            throw new Error('A senha não pode ser nula ou vazia!');
        }

        let user = await UserRepository.findOneByEmail(email);
        if (!user) {
            throw new Error('Usuário não encontrado!');
        }

        let isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new Error('Senha inválida!');
        }

        user.password = undefined;
        return { user, token: this.generateToken(user.id) };
    }

    private generateToken(id: string) {
        return jwt.sign({ id }, process.env.SECRET,
            { expiresIn: process.env.TOKEN_EXPIRATION_TIME }
        );
    }

    public async userForgotPassword(userEmail: string) {
        if (!userEmail) {
            throw new Error('O e-mail não pode ser nulo ou vazio!');
        }

        let user = await UserRepository.findOneByEmail(userEmail);
        if (!user) {
            throw new Error('Usuário não encontrado!');
        }

        const newToken = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await UserRepository.saveResetPassword(user.id, newToken, now);

        return await EmailExternal.SendForgotPasswordToUserEmail(userEmail, newToken);
    }

    public async resetUserPassword(userParams: any) {
        const { email, token, password } = userParams;

        if (!email) {
            throw new Error('O e-mail não pode ser nulo ou vazio!');
        }

        if (!token) {
            throw new Error('O token não pode ser nulo ou vazio!');
        }

        if (!password) {
            throw new Error('A senha não pode ser nula ou vazia!');
        }

        let user = await UserRepository.findOneByEmailWithPasswordReset(email);
        if (!user) {
            throw new Error('Usuário não encontrado!');
        }

        if (token !== user.passwordResetToken) {
            throw new Error('Token inválido!');
        }

        const now = new Date();
        if (now > user.passwordResetExpires) {
            throw new Error('Token expirado, por favor gere um novo token!');
        }

        user.password = password;
        return await UserRepository.save(user);
    }
}

export default new AuthService();
