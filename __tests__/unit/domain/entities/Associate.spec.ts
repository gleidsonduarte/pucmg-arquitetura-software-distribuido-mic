import { Address } from "../../../../src/domain/entities/Address/Address";
import { Anamnese } from "../../../../src/domain/entities/Anamnese";
import { Associate } from "../../../../src/domain/entities/Associate";
import { Contact } from "../../../../src/domain/entities/Contact";
import { Exam } from "../../../../src/domain/entities/Exam";
import { EducationEnum } from "../../../../src/domain/enums/EducationEnum";
import { GenderEnum } from "../../../../src/domain/enums/GenderEnum";
import { MaritalStatusEnum } from "../../../../src/domain/enums/MaritalStatusEnum";

describe("Create associate", () => {
    it("Should be able to create a new associate", () => {
        const mockAddress: Address = {
            "publicArea": "TestPublicArea",
            "city": "TestCity",
            "state": "TestState",
            "postalCode": "TestPostalCode"
        };

        const mockContact: Contact = {
            "phoneNumber": 1133445566,
            "cellNumber": 11922334455,
            "emailAddress": "TestEmailAddress"
        };

        const mockAnamnese: Anamnese = {
            "bloodGroup": "TestBloodGroup",
            "chronicConditions": "TestChronicConditions",
            "allergies": "TestAllergies"
        };

        const mockExam: Exam = {
            "examDate": new Date("2021/10/30"),
            "healthInsurance": "Sulamérica",
            "examType": "Sangue",
            "examLocation": "Avenida Morumbi",
            "examObservation": "Saúde 100%",
            "doctor": "Dr. House",
            "billNumber": 112235,
            "totalPaid": 150.99
        };

        const mockAssociate: Associate = {
            "firstName": "TestFirstName",
            "lastName": "TestLastName",
            "cpf": 11122233344,
            "birthDate": "1/11/1990",
            "gender": GenderEnum.OTHER,
            "maritalStatus": MaritalStatusEnum.ENGAGED,
            "education": EducationEnum.BACHELORS_DEGREE,
            "address": mockAddress,
            "contact": mockContact,
            "anamnese": mockAnamnese,
            "exam": [mockExam]
        };

        const associate = new Associate(mockAssociate);

        expect(associate).toBeInstanceOf(Associate);
        expect(associate.address).toBeInstanceOf(Address);
        expect(associate.contact).toBeInstanceOf(Contact);
        expect(associate.anamnese).toBeInstanceOf(Anamnese);
        expect(associate.exam).toBeInstanceOf(Array);
        expect(typeof associate.birthDate).toBe('string');
        expect(typeof associate.firstName).toBe('string');
        expect(typeof associate.lastName).toBe('string');
        expect(typeof associate.cpf).toBe('number');
        expect(associate.firstName).toEqual(mockAssociate.firstName);
        expect(associate.lastName).toEqual(mockAssociate.lastName);
        expect(associate.cpf).toEqual(mockAssociate.cpf);
        expect(associate.birthDate).toEqual(mockAssociate.birthDate);
        expect(associate.gender).toEqual(mockAssociate.gender);
        expect(associate.maritalStatus).toEqual(mockAssociate.maritalStatus);
        expect(associate.education).toEqual(mockAssociate.education);
        expect(associate.address).toEqual(mockAssociate.address);
        expect(associate.contact).toEqual(mockAssociate.contact);
        expect(associate.anamnese).toEqual(mockAssociate.anamnese);
        expect(associate.exam).toEqual(mockAssociate.exam);
    });
});
