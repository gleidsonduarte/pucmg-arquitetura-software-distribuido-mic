module.exports = {
  get: {
    summary: 'Consulta os dados de um associado pelo seu primeiro nome',
    description: 'Essa rota é responsável pela consulta de todos os dados de um associado encontrado na base de dados pelo seu primeiro nome',
    tags: [ 'Associado' ],
    parameters: [
      {
        in: 'path',
        name: 'firstName',
        required: true,
        description: 'Primeiro nome do associado'
      }
    ],
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
              $ref: '#/components/schemas/ErrorSearchingAssociateById'
            },
            examples: {
              ErrorSearchingAssociateById: {
                $ref: '#/components/examples/ErrorSearchingAssociateById'
              }
            }
          }
        }
      }
    }
  }
};
