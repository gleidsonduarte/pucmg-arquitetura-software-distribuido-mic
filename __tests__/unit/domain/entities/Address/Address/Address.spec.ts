import { Address } from "../../../../../../src/domain/entities/Address/Address";

describe("Create address", () => {
    it("Should be able to create a new address", () => {
        const mockAddress: Address = {
            "publicArea": "TestPublicArea",
            "city": "TestCity",
            "state": "TestState",
            "postalCode": "TestPostalCode"
        };

        const address = new Address(mockAddress);

        expect(address).toBeInstanceOf(Address);
        expect(typeof address.publicArea).toBe('string');
        expect(typeof address.city).toBe('string');
        expect(typeof address.state).toBe('string');
        expect(typeof address.postalCode).toBe('string');
        expect(address.publicArea).toEqual(mockAddress.publicArea);
        expect(address.city).toEqual(mockAddress.city);
        expect(address.state).toEqual(mockAddress.state);
        expect(address.postalCode).toEqual(mockAddress.postalCode);
    });
});
