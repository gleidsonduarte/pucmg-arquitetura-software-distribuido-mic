import { UserInterface } from "../../../domain/interfaces/entities/UserInterface";

const bcrypt = require('bcryptjs');
const mongooseUser = require('mongoose');

const userSchema = new mongooseUser.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    passwordResetToken: {
        type: String,
        select: false
    },
    passwordResetExpires: {
        type: Date,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', async function(this: UserInterface, next: any) {
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;

    next();
});

export const userMapping = mongooseUser.model('User', userSchema);
