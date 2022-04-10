module.exports = {
  post: {
    summary: 'Salva os dados de um usuário',
    description: 'Essa rota é responsável por salvar todos os dados de um usuário',
    tags: [ 'Autenticação' ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/UserRegister'
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
              $ref: '#/components/schemas/UserRegisterWithToken'
            },
            examples: {
              UserRegisterWithToken: {
                $ref: '#/components/examples/UserRegisterWithToken'
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
              $ref: '#/components/schemas/AuthGenericError'
            },
            examples: {
              ErrorUserAlreadyExists: {
                $ref: '#/components/examples/ErrorUserAlreadyExists'
              },
              ErrorNameCannotBeNullOrEmpty: {
                $ref: '#/components/examples/ErrorNameCannotBeNullOrEmpty'
              },
              ErrorEmailCannotBeNullOrEmpty: {
                $ref: '#/components/examples/ErrorEmailCannotBeNullOrEmpty'
              },
              ErrorPasswordCannotBeNullOrEmpty: {
                $ref: '#/components/examples/ErrorPasswordCannotBeNullOrEmpty'
              }
            }
          }
        }
      }
    }
  }
};
