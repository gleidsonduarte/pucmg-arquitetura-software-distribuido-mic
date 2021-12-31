module.exports = {
  delete: {
    summary: 'Excluí os dados de um associado',
    description: 'Essa rota é responsável por excluir todos os dados de um associado na base de dados',
    tags: [ 'Associado' ],
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
              $ref: '#/components/schemas/AssociateWithUnderlineId'
            },
            examples: {
              Associate: {
                $ref: '#/components/examples/AssociateWithUnderlineId'
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
              $ref: '#/components/schemas/GenericErrorExecutingNoSQLCommandForAssociate'
            },
            examples: {
              GenericErrorExecutingNoSQLCommandForAssociate: {
                $ref: '#/components/examples/GenericErrorExecutingNoSQLCommandForAssociate'
              }
            }
          }
        }
      }
    }
  }
};
