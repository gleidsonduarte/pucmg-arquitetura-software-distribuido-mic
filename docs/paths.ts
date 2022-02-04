const getHealthCheck = require('./health-check/getHealthCheck');
const addressGetPostalCode = require('./address/getPostalCode');
const getAllAssociate = require('./associate/getAll');
const getAssociateById = require('./associate/getAssociateById');
const saveAssociate = require('./associate/saveAssociate');
const updateAssociate = require('./associate/updateAssociate');
const deleteAssociate = require('./associate/deleteAssociate');
const getAllProvider = require('./provider/getAll');
const getProviderById = require('./provider/getProviderById');
const saveProvider = require('./provider/saveProvider');
const updateProvider = require('./provider/updateProvider');
const deleteProvider = require('./provider/deleteProvider');

module.exports = {
  paths: {
    '/v1/health-check': {
      ...getHealthCheck
    },
    '/v1/address/postal-code/{postalCode}': {
      ...addressGetPostalCode
    },
    '/v1/associate/all': {
      ...getAllAssociate
    },
    '/v1/associate/id/{id}': {
      ...getAssociateById
    },
    '/v1/associate/save': {
      ...saveAssociate
    },
    '/v1/associate/update': {
      ...updateAssociate
    },
    '/v1/associate/delete': {
      ...deleteAssociate
    },
    '/v1/provider/all': {
      ...getAllProvider
    },
    '/v1/provider/id/{id}': {
      ...getProviderById
    },
    '/v1/provider/save': {
      ...saveProvider
    },
    '/v1/provider/update': {
      ...updateProvider
    },
    '/v1/provider/delete': {
      ...deleteProvider
    }
  }
};
