module.exports = {
  UserRegister: {
    type: 'object',
    properties: {
      name: {
        type: 'string'
      },
      email: {
        type: 'string'
      },
      password: {
        type: 'string'
      }
    }
  },
  UserRegisterWithToken: {
    type: 'object',
    properties: {
      user: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          email: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      },
      token: {
        type: 'string'
      }
    }
  },
  UserAuthenticate: {
    type: 'object',
    properties: {
      email: {
        type: 'string'
      },
      password: {
        type: 'string'
      }
    }
  },
  UserAuthenticateWithToken: {
    type: 'object',
    properties: {
      user: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          email: {
            type: 'string'
          }
        }
      },
      token: {
        type: 'string'
      }
    }
  },
  UserForgotPassword: {
    type: 'object',
    properties: {
      cpf: {
        type: 'string'
      }
    }
  },
  UserResetPassword: {
    type: 'object',
    properties: {
      email: {
        type: 'string'
      },
      token: {
        type: 'string'
      },
      password: {
        type: 'string'
      }
    }
  },
  UserResetedPassword: {
    type: 'object',
    properties: {
      _id: {
        type: 'string'
      },
      passwordResetExpires: {
        type: 'string'
      },
      passwordResetToken: {
        type: 'string'
      }
    }
  },
  AuthGenericError: {
    type: 'object',
    properties: {
      error: {
        type: 'string'
      }
    }
  }
};
