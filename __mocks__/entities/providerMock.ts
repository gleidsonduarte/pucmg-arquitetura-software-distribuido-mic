import { EducationEnum } from "../../src/domain/enums/EducationEnum";
import { GenderEnum } from "../../src/domain/enums/GenderEnum";
import { MaritalStatusEnum } from "../../src/domain/enums/MaritalStatusEnum";

const addressMock = require('./addressMock');
const contactMock = require('./contactMock');

module.exports = {
    firstName: "Gleidson",
	lastName: "Duarte",
	cpf: 11122233344,
	birthDate: "1/11/1990",
	gender: GenderEnum.OTHER,
	maritalStatus: MaritalStatusEnum.ENGAGED,
	education: EducationEnum.BACHELORS_DEGREE,
	...contactMock,
	...addressMock
};
