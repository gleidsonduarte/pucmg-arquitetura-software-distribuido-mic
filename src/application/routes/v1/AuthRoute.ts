import AuthController from '../../controllers/AuthController';

const AuthRoute = require('express').Router();

AuthRoute.use('/v1/auth', AuthRoute);
AuthRoute.post('/register', AuthController.register);
AuthRoute.post('/authenticate', AuthController.authenticate);
AuthRoute.post('/forgot-password', AuthController.forgotPassword);
AuthRoute.post('/reset-password', AuthController.resetPassword);

export default AuthRoute;
