module.exports = {
  Associate: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      },
      cpf: {
        type: 'number',
        example: '11111111111'
      },
      birthDate: {
        type: 'date',
        example: '1989-03-21T00:00:00.000Z'
      },
      gender: {
        type: 'string'
      },
      maritalStatus: {
        type: 'string'
      },
      education: {
        type: 'string'
      },
      address: {
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
      contact: {
        type: 'object',
        properties: {
          phoneNumber: {
            type: 'number',
            example: '1133223344'
          },
          cellNumber: {
            type: 'number',
            example: '11911223344'
          },
          emailAddress: {
            type: 'string'
          }
        }
      },
      anamnese: {
        type: 'object',
        properties: {
          bloodGroup: {
            type: 'string'
          },
          chronicConditions: {
            type: 'string'
          },
          allergies: {
            type: 'string'
          }
        }
      },
      exam: {
        type: 'object',
        properties: {
          examDate: {
            type: 'date',
            example: '1989-03-21T00:00:00.000Z'
          },
          healthInsurance: {
            type: 'string'
          },
          examType: {
            type: 'string'
          },
          examLocation: {
            type: 'string'
          },
          examObservation: {
            type: 'string'
          },
          doctor: {
            type: 'string'
          },
          billNumber: {
            type: 'number',
            example: '10.55'
          },
          totalPaid: {
            type: 'number',
            example: '10.55'
          }
        }
      }
    }
  },
  AssociateWithId: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      },
      firstName: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      },
      cpf: {
        type: 'number',
        example: '11111111111'
      },
      birthDate: {
        type: 'date',
        example: '1989-03-21T00:00:00.000Z'
      },
      gender: {
        type: 'string'
      },
      maritalStatus: {
        type: 'string'
      },
      education: {
        type: 'string'
      },
      address: {
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
      contact: {
        type: 'object',
        properties: {
          phoneNumber: {
            type: 'number',
            example: '1133223344'
          },
          cellNumber: {
            type: 'number',
            example: '11911223344'
          },
          emailAddress: {
            type: 'string'
          }
        }
      },
      anamnese: {
        type: 'object',
        properties: {
          bloodGroup: {
            type: 'string'
          },
          chronicConditions: {
            type: 'string'
          },
          allergies: {
            type: 'string'
          }
        }
      },
      exam: {
        type: 'object',
        properties: {
          examDate: {
            type: 'date',
            example: '1989-03-21T00:00:00.000Z'
          },
          healthInsurance: {
            type: 'string'
          },
          examType: {
            type: 'string'
          },
          examLocation: {
            type: 'string'
          },
          examObservation: {
            type: 'string'
          },
          doctor: {
            type: 'string'
          },
          billNumber: {
            type: 'number',
            example: '10.55'
          },
          totalPaid: {
            type: 'number',
            example: '10.55'
          }
        }
      }
    }
  },
  AssociateWithUnderlineId: {
    type: 'object',
    properties: {
      _id: {
        type: 'string'
      },
      firstName: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      },
      cpf: {
        type: 'number'
      },
      birthDate: {
        type: 'date'
      },
      gender: {
        type: 'string'
      },
      maritalStatus: {
        type: 'string'
      },
      education: {
        type: 'string'
      },
      address: {
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
      contact: {
        type: 'object',
        properties: {
          phoneNumber: {
            type: 'number'
          },
          cellNumber: {
            type: 'number'
          },
          emailAddress: {
            type: 'string'
          }
        }
      },
      anamnese: {
        type: 'object',
        properties: {
          bloodGroup: {
            type: 'string'
          },
          chronicConditions: {
            type: 'string'
          },
          allergies: {
            type: 'string'
          }
        }
      },
      exam: {
        type: 'object',
        properties: {
          examDate: {
            type: 'date'
          },
          healthInsurance: {
            type: 'string'
          },
          examType: {
            type: 'string'
          },
          examLocation: {
            type: 'string'
          },
          examObservation: {
            type: 'string'
          },
          doctor: {
            type: 'string'
          },
          billNumber: {
            type: 'number'
          },
          totalPaid: {
            type: 'number'
          }
        }
      }
    }
  },
  GenericErrorExecutingNoSQLCommandForAssociate: {
    type: 'object',
    properties: {
      error: {
        type: 'string'
      }
    }
  },
  ErrorSearchingAllAssociates: {
    type: 'object',
    properties: {
      error: {
        type: 'string'
      }
    }
  },
  ErrorSearchingAssociateById: {
    type: 'object',
    properties: {
      error: {
        type: 'string'
      }
    }
  }
};
