module.exports = {
  HealthCheckStatus: {
    type: 'object',
    properties: {
      uptime: {
        type: 'number'
      },
      message: {
        type: 'string'
      },
      timestamp: {
        type: 'number'
      },
      checks: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          type: {
            type: 'string'
          },
          status: {
            type: 'number'
          }
        }
      }
    }
  }
};
