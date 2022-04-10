module.exports = {
  post: {
    summary: 'Envia um token de recuperação de senha para o e-mail do usuário cadastrado',
    description: 'Essa rota é responsável enviar um token de recuperação de senha para o e-mail do usuário cadastrado',
    tags: [ 'Autenticação' ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/UserForgotPassword'
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
              value: { }
            },
            examples: {
              NoBody: { }
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
              }
            }
          }
        }
      }
    }
  }
};
