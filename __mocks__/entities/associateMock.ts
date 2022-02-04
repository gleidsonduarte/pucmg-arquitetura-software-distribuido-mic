const anamneseMock = require('./anamneseMock');
const examMock = require('./examMock');
const providerMock = require('./providerMock');

module.exports = {
	...anamneseMock,
	...examMock,
	...providerMock
};
