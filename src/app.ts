import express from 'express';
import AddressRoute from './application/routes/v1/AddressRoute';
import AssociateRoute from './application/routes/v1/AssociateRoute';
import AuthRoute from './application/routes/v1/AuthRoute';
import DocumentationRoute from './application/routes/v1/DocumentationRoute';
import HealthCheckRoute from './application/routes/v1/HealthCheckRoute';
import ProviderRoute from './application/routes/v1/ProviderRoute';
import Mongo from './infrastructure/data/contexts/Mongo';

const cors = require('cors');
const corsOptions = {
    origin: process.env.ALLOWED_URL,
    methods: 'GET, POST, PUT, DELETE'
};

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors(corsOptions));
    }

    private database(): void {
        Mongo.connect();
    }

    private routes(): void {
        this.express.use(HealthCheckRoute);
        this.express.use(DocumentationRoute);
        this.express.use(AuthRoute);
        this.express.use(AddressRoute);
        this.express.use(AssociateRoute);
        this.express.use(ProviderRoute);
    }
}

export default new App().express;