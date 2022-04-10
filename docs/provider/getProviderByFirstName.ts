module.exports = {
  get: {
    summary: 'Consulta os dados de um prestador de serviços pelo seu primeiro nome',
    description: 'Essa rota é responsável pela consulta de todos os dados de um prestador de serviços na base de dados pelo seu primeiro nome',
    tags: [ 'Prestador de serviços' ],
    parameters: [
      {
        in: 'path',
        name: 'firstName',
        required: true,
        description: 'Primeiro nome do prestador de serviços'
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
