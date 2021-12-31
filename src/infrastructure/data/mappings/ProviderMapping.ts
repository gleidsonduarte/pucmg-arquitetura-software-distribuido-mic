import { PersonSchema } from "./PersonMapping";

const mongooseProvider = require('mongoose');
const extendSchemaProvider = require('mongoose-extend-schema');

const providerSchema = extendSchemaProvider(PersonSchema);

export const providerMapping = mongooseProvider.model('Provider', providerSchema);
