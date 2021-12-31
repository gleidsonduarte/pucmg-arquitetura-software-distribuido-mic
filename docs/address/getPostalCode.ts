module.exports = {
  get: {
    summary: 'Consulta os dados de endereço através de API externa passando o CEP',
    description: 'Essa rota é responsável por consultar o endereço através do CEP passado nos serviços externos da API ViaCEP',
    tags: [ 'Endereço' ],
    parameters: [
      {
        in: 'path',
        name: 'postalCode',
        required: true,
        description: 'Código postal'
      }
    ],
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/components/schemas/Address'
            },
            examples: {
              Address: {
                $ref: '#/components/examples/Address'
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
              oneOf: [
                { $ref: '#/components/schemas/InvalidPostalCode' },
                { $ref: '#/components/schemas/NullOrEmptyPublicArea' },
                { $ref: '#/components/schemas/NullOrEmptyCity' },
                { $ref: '#/components/schemas/NullOrEmptyState' },
                { $ref: '#/components/schemas/NullOrEmptyPostalCode' }
              ]
            },
            examples: {
              InvalidPostalCode: {
                $ref: '#/components/examples/InvalidPostalCode'
              },
              NullOrEmptyPublicArea: {
                $ref: '#/components/examples/NullOrEmptyPublicArea'
              },
              NullOrEmptyCity: {
                $ref: '#/components/examples/NullOrEmptyCity'
              },
              NullOrEmptyState: {
                $ref: '#/components/examples/NullOrEmptyState'
              },
              NullOrEmptyPostalCode: {
                $ref: '#/components/examples/NullOrEmptyPostalCode'
              }
            }
          }
        }
      }
    }
  }
};
