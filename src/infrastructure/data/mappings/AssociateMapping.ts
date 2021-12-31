import { PersonSchema } from "./PersonMapping";

const mongooseAssociate = require('mongoose');
const extendSchemaAssociate = require('mongoose-extend-schema');

const associateSchema = extendSchemaAssociate(PersonSchema, {
    anamnese: {
        bloodGroup: {
            type: String,
            require: false
        },
        chronicConditions: {
            type: String,
            require: false
        },
        allergies: {
            type: String,
            require: false
        }
    },
    exam: {
        examDate: {
            type: Date,
            require: false
        },
        healthInsurance: {
            type: String,
            require: false
        },
        examType: {
            type: String,
            require: false
        },
        examLocation: {
            type: String,
            require: false
        },
        examObservation: {
            type: String,
            require: false
        },
        doctor: {
            type: String,
            require: false
        },
        billNumber: {
            type: Number,
            require: false
        },
        totalPaid: {
            type: Number,
            require: false
        }
    }
});

export const associateMapping = mongooseAssociate.model('Associate', associateSchema);
