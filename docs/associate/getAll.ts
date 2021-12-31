module.exports = {
  get: {
    summary: 'Consulta todos os associados',
    description: 'Essa rota é responsável por consultar todos os associados existentes na base de dados',
    tags: [ 'Associado' ],
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/components/schemas/Associate'
            },
            examples: {
              Associate: {
                $ref: '#/components/examples/ArrayAssociate'
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
              $ref: '#/components/schemas/ErrorSearchingAllAssociates'
            },
            examples: {
              ErrorSearchingAllAssociates: {
                $ref: '#/components/examples/ErrorSearchingAllAssociates'
              }
            }
          }
        }
      }
    }
  }
};
