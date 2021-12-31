module.exports = {
	Provider: {
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
			}
		}
	},
	ProviderWithId: {
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
      }
    }
  },
	ProviderWithUnderlineId: {
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
      }
    }
  },
	GenericErrorExecutingNoSQLCommandForProvider: {
    type: 'object',
    properties: {
      error: {
        type: 'string'
      }
    }
  },
	ErrorSearchingAllProviders: {
    type: 'object',
    properties: {
      error: {
        type: 'string'
      }
    }
  },
	ErrorSearchingProviderById: {
    type: 'object',
    properties: {
      error: {
        type: 'string'
      }
    }
  }
}