import { Contact } from "../../../../src/domain/entities/Contact";

describe("Create contact", () => {
    it("Should be able to create a new contact", () => {
        const mockContact: Contact = {
            "phoneNumber": 1133445566,
            "cellNumber": 11922334455,
            "emailAddress": "TestEmailAddress"
        };

        const contac = new Contact(mockContact);

        expect(contac).toBeInstanceOf(Contact);
        expect(typeof contac.phoneNumber).toBe('number');
        expect(typeof contac.cellNumber).toBe('number');
        expect(typeof contac.emailAddress).toBe('string');
        expect(contac.phoneNumber).toEqual(mockContact.phoneNumber);
        expect(contac.cellNumber).toEqual(mockContact.cellNumber);
        expect(contac.emailAddress).toEqual(mockContact.emailAddress);
    });
});
