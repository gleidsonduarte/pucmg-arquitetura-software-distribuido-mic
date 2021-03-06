module.exports = {
  Provider: {
    value: {
      data: {
        firstName: 'Name 1',
        lastName: 'Exemple',
        cpf: 11122233344,
        birthDate: '1989-03-21T00:00:00.000Z',
        gender: 'masculino',
        maritalStatus: 'solteiro',
        education: 'ensino_fundamental',
        address: {
          publicArea: 'Avenida Paulista',
          city: 'SP',
          state: 'SP',
          postalCode: '12333444'
        },
        contact: {
          phoneNumber: 1133221100,
          cellNumber: 11988665544,
          emailAddress: 'name1exemple@email.com'
        }
      }
    }
  },
  ProviderWithId: {
    value: {
      data: {
        id: '618495b9949c83dd8b1ee7b1',
        firstName: 'Name 1',
        lastName: 'Exemple',
        cpf: 11122233344,
        birthDate: '1989-03-21T00:00:00.000Z',
        gender: 'masculino',
        maritalStatus: 'solteiro',
        education: 'ensino_fundamental',
        address: {
          publicArea: 'Avenida Paulista',
          city: 'SP',
          state: 'SP',
          postalCode: '12333444'
        },
        contact: {
          phoneNumber: 1133221100,
          cellNumber: 11988665544,
          emailAddress: 'name1exemple@email.com'
        }
      }
    }
  },
  ProviderWithUnderlineId: {
    value: {
      data: {
        _id: '618495b9949c83dd8b1ee7b1',
        firstName: 'Name 1',
        lastName: 'Exemple',
        cpf: 11122233344,
        birthDate: '1989-03-21T00:00:00.000Z',
        gender: 'masculino',
        maritalStatus: 'solteiro',
        education: 'ensino_fundamental',
        address: {
          publicArea: 'Avenida Paulista',
          city: 'SP',
          state: 'SP',
          postalCode: '12333444'
        },
        contact: {
          phoneNumber: 1133221100,
          cellNumber: 11988665544,
          emailAddress: 'name1exemple@email.com'
        }
      }
    }
  },
  ArrayProvider: {
    value: {
      data: [
        {
          _id: '618495b9949c83dd8b1ee7b1',
          firstName: 'Name 1',
          lastName: 'Exemple',
          cpf: 11122233344,
          birthDate: '1989-03-21T00:00:00.000Z',
          gender: 'masculino',
          maritalStatus: 'solteiro',
          education: 'ensino_fundamental',
          address: {
            publicArea: 'Avenida Paulista',
            city: 'SP',
            state: 'SP',
            postalCode: '12333444'
          },
          contact: {
            phoneNumber: 1133221100,
            cellNumber: 11988665544,
            emailAddress: 'name1exemple@email.com'
          }
        },
        {
          _id: '618495b9949c83dd8b1ee7b1',
          firstName: 'Name 2',
          lastName: 'Example',
          cpf: 33344455566,
          birthDate: '1989-03-21T00:00:00.000Z',
          gender: 'feminino',
          maritalStatus: 'solteiro',
          education: 'ensino_fundamental',
          address: {
            publicArea: 'Avenida das na????es unidas',
            city: 'SP',
            state: 'SP',
            postalCode: '12333444'
          },
          contact: {
            phoneNumber: 1133221100,
            cellNumber: 11988665544,
            emailAddress: 'name2exemple@email.com'
          }
        }
      ]
    }
  },
  GenericErrorExecutingNoSQLCommandForProvider: {
    value: {
      error: 'Generic error executing NoSQL command for provider!'
    }
  },
  ErrorSearchingAllProviders: {
    value: {
      error: 'Erro ao pesquisar por todos os prestadores!'
    }
  },
  ErrorSearchingProviderById: {
    value: {
      error: 'Erro ao pesquisar prestador pelo ID!'
    }
  }
};
