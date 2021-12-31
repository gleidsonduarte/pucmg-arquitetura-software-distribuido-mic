module.exports = {
    get: {
      summary: 'Consulta todos os prestadores de serviços',
      description: 'Essa rota é responsável por consultar todos os prestadores de serviços existentes na base de dados',
      tags: [ 'Prestador de Serviços' ],
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/Provider'
              },
              examples: {
                Provider: {
                  $ref: '#/components/examples/ArrayProvider'
                }
              }
            }
          }
        },
        400: {
          description: 'ERROR',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/ErrorSearchingAllProviders'
              },
              examples: {
                ErrorSearchingAllProviders: {
                  $ref: '#/components/examples/ErrorSearchingAllProviders'
                }
              }
            }
          }
        }
      }
    }
  };
  