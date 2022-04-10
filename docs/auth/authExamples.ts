module.exports = {
  UserRegisterWithToken: {
    value: {
      data: {
        user: {
          name: 'Example Name',
          email: 'example@email.com',
          password: 12345678
        },
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDgyNTQzMTcsImV4cCI6MTY0ODI1NDYxN30..."
      }
    }
  },
  UserAuthenticateWithToken: {
    value: {
      data: {
        user: {
          name: 'Example Name',
          email: 'example@email.com'
        },
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
      }
    }
  },
  UserResetedPassword: {
    value: {
      data: {
        _id: "622ca...",
        passwordResetExpires: "2022-04-06T05:14:06.475Z",
        passwordResetToken: "1c504..."
      }
    }
  },
  ErrorUserNotFound: {
    value: {
      error: 'Usuário não encontrado!'
    }
  },
  ErrorUserAlreadyExists: {
    value: {
      error: 'Usuário já existe!'
    }
  },
  ErrorTokenCannotBeNullOrEmpty: {
    value: {
      error: 'O token não pode ser nulo ou vazio!'
    }
  },
  ErrorNameCannotBeNullOrEmpty: {
    value: {
      error: 'O nome não pode ser nulo ou vazio!'
    }
  },
  ErrorEmailCannotBeNullOrEmpty: {
    value: {
      error: 'O e-mail não pode ser nulo ou vazio!'
    }
  },
  ErrorPasswordCannotBeNullOrEmpty: {
    value: {
      error: 'A senha não pode ser nula ou vazia!'
    }
  },
  ErrorInvalidPassword: {
    value: {
      error: 'Senha inválida!'
    }
  }
};
