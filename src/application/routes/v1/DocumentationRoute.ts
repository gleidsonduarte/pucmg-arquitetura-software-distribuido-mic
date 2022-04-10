import swaggerUi from 'swagger-ui-express';

const swaggerDocs = require('../../../../docs');
const DocumentationRoute = require('express').Router();
const swaggerOptions = {
    swaggerOptions: {
        tryItOutEnable: false,
        supportedSubmitMethods: ['']
    }
};

DocumentationRoute.use('/api-docs', swaggerUi.serve);
DocumentationRoute.get('/api-docs', swaggerUi.setup(swaggerDocs, swaggerOptions));

export default DocumentationRoute;
