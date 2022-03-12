import AssociateController from '../../controllers/AssociateController';

const authMiddleware = require('../../middleware/AuthMiddleware');
const AssociateRoute = require('express').Router();

AssociateRoute.use('/v1/associate', authMiddleware, AssociateRoute);
AssociateRoute.get('/id/:id', AssociateController.getAssociateById);
AssociateRoute.get('/first-name/:firstName', AssociateController.getAssociateByFirstName);
AssociateRoute.get('', AssociateController.getAllAssociates);
AssociateRoute.post('', AssociateController.saveAssociate);
AssociateRoute.put('', AssociateController.updateAssociateById);
AssociateRoute.delete('', AssociateController.deleteAssociate);

export default AssociateRoute;
