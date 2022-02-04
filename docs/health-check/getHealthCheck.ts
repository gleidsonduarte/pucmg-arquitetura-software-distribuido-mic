module.exports = {
  get: {
    summary: 'Consulta as condições e status dessa API',
    description: 'Essa rota é responsável por consultar as condições e o status dessa API',
    tags: [ 'Health Check' ],
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/components/schemas/HealthCheckStatus'
            },
            examples: {
              HealthCheck: {
                $ref: '#/components/examples/HealthCheckStatus'
              }
            }
          }
        }
      }
    }
  }
};
