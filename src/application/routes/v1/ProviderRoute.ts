import ProviderController from '../../controllers/ProviderController';

const ProviderRoute = require('express').Router();

ProviderRoute.use('/v1/provider', ProviderRoute);
ProviderRoute.get('/all', ProviderController.getAllProviders);
ProviderRoute.get('/id/:id', ProviderController.getProviderById);
ProviderRoute.get('/first-name/:firstName', ProviderController.getProviderByFirstName);
ProviderRoute.post('/save', ProviderController.saveProvider);
ProviderRoute.put('/update', ProviderController.updateProviderById);
ProviderRoute.delete('/delete', ProviderController.deleteProvider);

export default ProviderRoute;
