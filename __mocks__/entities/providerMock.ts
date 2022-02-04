const addressMock = require('./addressMock');
const contactMock = require('./contactMock');

module.exports = {
    firstName: "Gleidson",
	lastName: "Duarte",
	cpf: 11122233344,
	birthDate: "1989/03/21",
	gender: "masculino",
	maritalStatus: "solteiro",
	education: "ensino_medio",
	...contactMock,
	...addressMock
};
