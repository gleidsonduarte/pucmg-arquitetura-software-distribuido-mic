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
      error: 'Postal code with invalid numbers!'
    }
  },
  NullOrEmptyPublicArea: {
    value: {
      error: 'Public area cannot be null or empty!'
    }
  },
  NullOrEmptyCity: {
    value: {
      error: 'City cannot be null or empty!'
    }
  },
  NullOrEmptyState: {
    value: {
      error: 'State cannot be null or empty!'
    }
  },
  NullOrEmptyPostalCode: {
    value: {
      error: 'Postal code cannot be null or empty!'
    }
  }
};
