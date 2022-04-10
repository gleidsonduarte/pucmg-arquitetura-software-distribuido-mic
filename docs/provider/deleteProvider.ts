module.exports = {
  delete: {
    summary: 'Excluí os dados de um prestador de serviços',
    description: 'Essa rota é responsável por excluir todos os dados de um prestador de serviços na base de dados',
    tags: [ 'Prestador de serviços' ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: 'object',
            properties: {
              id: {
                type: "string"
              }
            }
          }
        }
      }
    },
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
              $ref: '#/components/schemas/GenericErrorExecutingNoSQLCommandForProvider'
            },
            examples: {
              GenericErrorExecutingNoSQLCommandForProvider: {
                $ref: '#/components/examples/GenericErrorExecutingNoSQLCommandForProvider'
              }
            }
          }
        }
      }
    }
  }
};
