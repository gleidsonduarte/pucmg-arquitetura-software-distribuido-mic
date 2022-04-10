module.exports = {
  Address: {
    value: {
      data: {
        publicArea: 'Rua das coves',
        city: 'São Paulo',
        state: 'SP',
        postalCode: '01010-100'
      }
    }
  },
  InvalidPostalCode: {
    value: {
      error: 'Código postal com números inválidos!'
    }
  },
  NullOrEmptyPublicArea: {
    value: {
      error: 'Endereço não pode ser nulo ou vazio!'
    }
  },
  NullOrEmptyCity: {
    value: {
      error: 'Cidade não pode ser nula ou vazia!'
    }
  },
  NullOrEmptyState: {
    value: {
      error: 'Estado não pode ser nulo ou vazio!'
    }
  },
  NullOrEmptyPostalCode: {
    value: {
      error: 'Código postal não pode ser nulo ou vazio!'
    }
  }
};
