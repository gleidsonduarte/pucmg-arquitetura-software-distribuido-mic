module.exports = {
  post: {
    summary: 'Valida os dados do usuário',
    description: 'Essa rota é responsável por autenticar o usuário, em caso de sucesso um novo token é gerado',
    tags: [ 'Autenticação' ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/UserAuthenticate'
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
              $ref: '#/components/schemas/UserAuthenticateWithToken'
            },
            examples: {
              UserRegisterWithToken: {
                $ref: '#/components/examples/UserAuthenticateWithToken'
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
              ErrorEmailCannotBeNullOrEmpty: {
                $ref: '#/components/examples/ErrorEmailCannotBeNullOrEmpty'
              },
              ErrorPasswordCannotBeNullOrEmpty: {
                $ref: '#/components/examples/ErrorPasswordCannotBeNullOrEmpty'
              },
              ErrorUserNotFound: {
                $ref: '#/components/examples/ErrorUserNotFound'
              },
              ErrorInvalidPassword: {
                $ref: '#/components/examples/ErrorInvalidPassword'
              }
            }
          }
        }
      }
    }
  }
};
