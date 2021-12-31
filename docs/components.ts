const addressSchemas = require('./address/addressSchemas');
const addressExamples = require('./address/addressExamples');
const associateSchemas = require('./associate/associateSchemas');
const associateExamples = require('./associate/associateExamples');
const providerSchema = require('./provider/providerSchema');
const providerExamples = require('./provider/providerExamples');

module.exports = {
  components: {
    schemas: {
      ...addressSchemas,
      ...associateSchemas,
      ...providerSchema
    },
    examples: {
      ...addressExamples,
      ...associateExamples,
      ...providerExamples
    }
  }
};
