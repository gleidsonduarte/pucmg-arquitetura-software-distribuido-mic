import express from 'express';
import AddressRoute from './application/routes/v1/AddressRoute';
import AssociateRoute from './application/routes/v1/AssociateRoute';
import DocumentationRoute from './application/routes/v1/DocumentationRoute';
import ProviderRoute from './application/routes/v1/ProviderRoute';

const mongooseContext = require('./infrastructure/data/contexts/mongo');

class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
    }

    private database (): void {
        mongooseContext
    }
    
    private routes(): void {
        this.express.use(DocumentationRoute);
        this.express.use(AddressRoute)
        this.express.use(AssociateRoute)
        this.express.use(ProviderRoute)
    }
}

export default new App().express