module.exports = {
  get: {
    summary: 'Consulta os dados de um prestador de serviços pelo seu ID',
    description: 'Essa rota é responsável pela consulta de todos os dados de um prestador de serviços na base de dados pelo seu ID',
    tags: [ 'Prestador de Serviços' ],
    parameters: [
      {
        in: 'path',
        name: 'id',
        required: true,
        description: 'ID do prestador de serviços'
      }
    ],
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/components/schemas/ProviderWithUnderlineId'
            },
            examples: {
              Provider: {
                $ref: '#/components/examples/ProviderWithUnderlineId'
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
              $ref: '#/components/schemas/ErrorSearchingProviderById'
            },
            examples: {
              ErrorSearchingProviderById: {
                $ref: '#/components/examples/ErrorSearchingProviderById'
              }
            }
          }
        }
      }
    }
  }
};
