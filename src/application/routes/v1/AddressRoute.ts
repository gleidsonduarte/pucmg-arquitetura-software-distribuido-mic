import AddressController from "../../controllers/AddressController";

const authMiddleware = require('../../middleware/AuthMiddleware');
const AddressRoute = require('express').Router();

AddressRoute.use('/v1/address', authMiddleware, AddressRoute);
AddressRoute.get('/postal-code/:postalCode', AddressController.getAddress);

export default AddressRoute;
