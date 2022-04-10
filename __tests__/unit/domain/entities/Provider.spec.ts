import { Address } from "../../../../src/domain/entities/Address/Address";
import { Contact } from "../../../../src/domain/entities/Contact";
import { Provider } from "../../../../src/domain/entities/Provider";
import { EducationEnum } from "../../../../src/domain/enums/EducationEnum";
import { GenderEnum } from "../../../../src/domain/enums/GenderEnum";
import { MaritalStatusEnum } from "../../../../src/domain/enums/MaritalStatusEnum";

describe("Create provider", () => {
    it("Should be able to create a new provider", () => {
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

        const mockProvider: Provider = {
            "firstName": "TestFirstName",
            "lastName": "TestLastName",
            "cpf": 11122233344,
            "birthDate": "1/11/1990",
            "gender": GenderEnum.OTHER,
            "maritalStatus": MaritalStatusEnum.ENGAGED,
            "education": EducationEnum.BACHELORS_DEGREE,
            "address": mockAddress,
            "contact": mockContact
        };

        const provider = new Provider(mockProvider);

        expect(provider).toBeInstanceOf(Provider);
        expect(provider.address).toBeInstanceOf(Address);
        expect(provider.contact).toBeInstanceOf(Contact);
        expect(typeof provider.birthDate).toBe('string');
        expect(typeof provider.firstName).toBe('string');
        expect(typeof provider.lastName).toBe('string');
        expect(typeof provider.cpf).toBe('number');
        expect(provider.firstName).toEqual(mockProvider.firstName);
        expect(provider.lastName).toEqual(mockProvider.lastName);
        expect(provider.cpf).toEqual(mockProvider.cpf);
        expect(provider.birthDate).toEqual(mockProvider.birthDate);
        expect(provider.gender).toEqual(mockProvider.gender);
        expect(provider.maritalStatus).toEqual(mockProvider.maritalStatus);
        expect(provider.education).toEqual(mockProvider.education);
        expect(provider.address).toEqual(mockProvider.address);
        expect(provider.contact).toEqual(mockProvider.contact);
    });
});
