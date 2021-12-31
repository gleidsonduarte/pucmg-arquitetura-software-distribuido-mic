import AssociateController from '../../controllers/AssociateController';

const AssociateRoute = require('express').Router();

AssociateRoute.use('/v1/associate', AssociateRoute);
AssociateRoute.get('/all', AssociateController.getAllAssociates);
AssociateRoute.get('/id/:id', AssociateController.getAssociateById);
AssociateRoute.post('/save', AssociateController.saveAssociate);
AssociateRoute.put('/update', AssociateController.updateAssociateById);
AssociateRoute.delete('/delete', AssociateController.deleteAssociate);

export default AssociateRoute;
