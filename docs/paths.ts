const userRegister = require('./auth/userRegister');
const userAuthenticate = require('./auth/userAuthenticate');
const userForgotPassword = require('./auth/userForgotPassword');
const userResetPassword = require('./auth/userResetPassword');
const getHealthCheck = require('./health-check/getHealthCheck');
const addressGetPostalCode = require('./address/getPostalCode');
const getAllAssociate = require('./associate/getAll');
const getAssociateById = require('./associate/getAssociateById');
const getAssociateByFirstName = require('./associate/getAssociateByFirstName');
const saveAssociate = require('./associate/saveAssociate');
const updateAssociate = require('./associate/updateAssociate');
const deleteAssociate = require('./associate/deleteAssociate');
const getAllProvider = require('./provider/getAll');
const getProviderById = require('./provider/getProviderById');
const getProviderByFirstName = require('./provider/getProviderByFirstName');
const saveProvider = require('./provider/saveProvider');
const updateProvider = require('./provider/updateProvider');
const deleteProvider = require('./provider/deleteProvider');

module.exports = {
  paths: {
    '/v1/auth/register': {
      ...userRegister
    },
    '/v1/auth/authenticate': {
      ...userAuthenticate
    },
    '/v1/auth/forgot-password': {
      ...userForgotPassword
    },
    '/v1/auth/reset-password': {
      ...userResetPassword
    },
    '/v1/health-check': {
      ...getHealthCheck
    },
    '/v1/address/postal-code/{postalCode}': {
      ...addressGetPostalCode
    },
    '/v1/associate/id/{id}': {
      ...getAssociateById
    },
    '/v1/associate/first-name/{firstName}': {
      ...getAssociateByFirstName
    },
    '/v1/associate': {
      ...getAllAssociate,
      ...saveAssociate,
      ...updateAssociate,
      ...deleteAssociate
    },
    '/v1/provider/id/{id}': {
      ...getProviderById
    },
    '/v1/provider/first-name/{firstName}': {
      ...getProviderByFirstName
    },
    '/v1/provider': {
      ...getAllProvider,
      ...saveProvider,
      ...updateProvider,
      ...deleteProvider
    }
  }
};
