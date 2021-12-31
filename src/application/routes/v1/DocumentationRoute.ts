import swaggerUi from 'swagger-ui-express';
const swaggerDocs = require('../../../../docs');

const DocumentationRoute = require('express').Router();

DocumentationRoute.use('/api-docs', swaggerUi.serve);
DocumentationRoute.get('/api-docs', swaggerUi.setup(swaggerDocs));

export default DocumentationRoute;
