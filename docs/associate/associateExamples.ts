module.exports = {
  Associate: {
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
        },
        anamnese: {
          bloodGroup: 'A+',
          chronicConditions: 'Diabetes',
          allergies: 'Corante'
        },
        exam: {
          examDate: '2021-10-30T00:00:00.000Z',
          healthInsurance: 'Sulamérica',
          examType: 'Sangue',
          examLocation: 'Avenida Morumbi',
          examObservation: 'Saúde 100%',
          doctor: 'Dr. House',
          billNumber: 112235,
          totalPaid: 150.99
        }
      }
    }
  },
  AssociateWithId: {
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
        },
        anamnese: {
          bloodGroup: 'A+',
          chronicConditions: 'Diabetes',
          allergies: 'Corante'
        },
        exam: {
          examDate: '2021-10-30T00:00:00.000Z',
          healthInsurance: 'Sulamérica',
          examType: 'Sangue',
          examLocation: 'Avenida Morumbi',
          examObservation: 'Saúde 100%',
          doctor: 'Dr. House',
          billNumber: 112235,
          totalPaid: 150.99
        }
      }
    }
  },
  AssociateWithUnderlineId: {
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
        },
        anamnese: {
          bloodGroup: 'A+',
          chronicConditions: 'Diabetes',
          allergies: 'Corante'
        },
        exam: {
          examDate: '2021-10-30T00:00:00.000Z',
          healthInsurance: 'Sulamérica',
          examType: 'Sangue',
          examLocation: 'Avenida Morumbi',
          examObservation: 'Saúde 100%',
          doctor: 'Dr. House',
          billNumber: 112235,
          totalPaid: 150.99
        }
      }
    }
  },
  ArrayAssociate: {
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
          },
          anamnese: {
            bloodGroup: 'A+',
            chronicConditions: 'Diabetes',
            allergies: 'Corante'
          },
          exam: {
            examDate: '2021-10-30T00:00:00.000Z',
            healthInsurance: 'Sulamérica',
            examType: 'Sangue',
            examLocation: 'Avenida Morumbi',
            examObservation: 'Saúde 100%',
            doctor: 'Dr. House',
            billNumber: 112235,
            totalPaid: 150.99
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
            publicArea: 'Avenida das nações unidas',
            city: 'SP',
            state: 'SP',
            postalCode: '12333444'
          },
          contact: {
            phoneNumber: 1133221100,
            cellNumber: 11988665544,
            emailAddress: 'name2exemple@email.com'
          },
          anamnese: {
            bloodGroup: 'A+',
            chronicConditions: 'Hipertensão',
            allergies: 'Abelhas'
          },
          exam: {
            examDate: '2021-10-30T00:00:00.000Z',
            healthInsurance: 'Sulamérica',
            examType: 'Sangue',
            examLocation: 'Avenida Morumbi',
            examObservation: 'Saúde 100%',
            doctor: 'Dr. House',
            billNumber: 112235,
            totalPaid: 150.99
          }
        }
      ]
    }
  },
  GenericErrorExecutingNoSQLCommandForAssociate: {
    value: {
      error: 'Generic error when saving associate!'
    }
  },
  ErrorSearchingAllAssociates: {
    value: {
      error: 'Error when searching for all associates!'
    }
  },
  ErrorSearchingAssociateById: {
    value: {
      error: 'Error when searching associate for id!'
    }
  }
};
