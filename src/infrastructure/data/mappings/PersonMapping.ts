const mongoosePerson = require('mongoose');

export const PersonSchema = new mongoosePerson.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    cpf: {
        type: Number,
        require: true
    },
    birthDate: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    maritalStatus: {
        type: String,
        require: true
    },
    education: {
        type: String,
        require: true
    },
    contact: {
        phoneNumber: {
            type: Number,
            require: true
        },
        cellNumber: {
            type: Number,
            require: true
        },
        emailAddress: {
            type: String,
            require: true
        }
    },
    address: {
        publicArea: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        state: {
            type: String,
            require: true
        },
        postalCode: {
            type: String,
            require: true
        }
    }
});
