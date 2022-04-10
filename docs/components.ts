const authSchemas = require('./auth/authSchemas');
const authExamples = require('./auth/authExamples');
const healthCheckSchemas = require('./health-check/healthCheckSchemas');
const healthCheckExamples = require('./health-check/healthCheckExamples');
const addressSchemas = require('./address/addressSchemas');
const addressExamples = require('./address/addressExamples');
const associateSchemas = require('./associate/associateSchemas');
const associateExamples = require('./associate/associateExamples');
const providerSchema = require('./provider/providerSchema');
const providerExamples = require('./provider/providerExamples');

module.exports = {
  components: {
    schemas: {
      ...authSchemas,
      ...healthCheckSchemas,
      ...addressSchemas,
      ...associateSchemas,
      ...providerSchema
    },
    examples: {
      ...authExamples,
      ...healthCheckExamples,
      ...addressExamples,
      ...associateExamples,
      ...providerExamples
    }
  }
};
