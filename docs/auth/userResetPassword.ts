module.exports = {
  post: {
    summary: 'Salva a nova senha alterada pelo usuário',
    description: 'Essa rota é responsável por salvar a nova senha alterada pelo usuário',
    tags: [ 'Autenticação' ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/UserResetPassword'
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
              $ref: '#/components/schemas/UserResetedPassword'
            },
            examples: {
              UserRegisterWithToken: {
                $ref: '#/components/examples/UserResetedPassword'
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
              ErrorUserNotFound: {
                $ref: '#/components/examples/ErrorUserNotFound'
              },
              ErrorEmailCannotBeNullOrEmpty: {
                $ref: '#/components/examples/ErrorEmailCannotBeNullOrEmpty'
              },
              ErrorTokenCannotBeNullOrEmpty: {
                $ref: '#/components/examples/ErrorTokenCannotBeNullOrEmpty'
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
