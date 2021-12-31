import ProviderController from '../../controllers/ProviderController';

const ProviderRoute = require('express').Router();

ProviderRoute.use('/v1/provider', ProviderRoute);
ProviderRoute.get('/all', ProviderController.getAllProviders);
ProviderRoute.get('/id/:id', ProviderController.getProviderById);
ProviderRoute.get('/first-name/:firstName', ProviderController.getProviderByFirstName);
ProviderRoute.post('/', ProviderController.saveProvider);
ProviderRoute.put('/', ProviderController.updateProviderById);
ProviderRoute.delete('/', ProviderController.deleteProvider);

export default ProviderRoute;
