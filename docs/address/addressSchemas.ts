module.exports = {
  Address: {
    type: 'object',
    properties: {
      publicArea: {
        type: 'string'
      },
      city: {
        type: 'string'
      },
      state: {
        type: 'string'
      },
      postalCode: {
        type: 'string'
      }
    }
  },
  InvalidPostalCode: {
    type: 'object',
    properties: {
      error: {
        type: 'string'
      }
    }
  },
  NullOrEmptyPublicArea: {
    type: 'object',
    properties: {
      error: {
        type: 'string'
      }
    }
  },
  NullOrEmptyCity: {
    type: 'object',
    properties: {
      error: {
        type: 'string'
      }
    }
  },
  NullOrEmptyState: {
    type: 'object',
    properties: {
      error: {
        type: 'string'
      }
    }
  },
  NullOrEmptyPostalCode: {
    type: 'object',
    properties: {
      error: {
        type: 'string'
      }
    }
  }
};
