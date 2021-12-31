import AddressController from "../../controllers/AddressController";

const AddressRoute = require('express').Router();

AddressRoute.use('/v1/address', AddressRoute);
AddressRoute.get('/postal-code/:postalCode', AddressController.getAddress);

export default AddressRoute;
