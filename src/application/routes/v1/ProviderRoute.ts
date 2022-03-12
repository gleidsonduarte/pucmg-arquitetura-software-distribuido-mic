import ProviderController from '../../controllers/ProviderController';

const authMiddleware = require('../../middleware/AuthMiddleware');
const ProviderRoute = require('express').Router();

ProviderRoute.use('/v1/provider', authMiddleware, ProviderRoute);
ProviderRoute.get('/id/:id', ProviderController.getProviderById);
ProviderRoute.get('/first-name/:firstName', ProviderController.getProviderByFirstName);
ProviderRoute.get('', ProviderController.getAllProviders);
ProviderRoute.post('', ProviderController.saveProvider);
ProviderRoute.put('', ProviderController.updateProviderById);
ProviderRoute.delete('', ProviderController.deleteProvider);

export default ProviderRoute;
