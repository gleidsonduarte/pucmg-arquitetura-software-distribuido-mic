import { AddressBr } from "../../../../../../src/domain/entities/Address/AddressBr";

describe("Create address", () => {
    it("Should be able to create a new brazilian address", () => {
        const mockBrAddress = {
            "logradouro": "TestPublicArea",
            "localidade": "TestCity",
            "uf": "TestState",
            "cep": "TestPostalCode"
        };

        const addressBr = new AddressBr(mockBrAddress);

        expect(addressBr).toBeInstanceOf(AddressBr);
        expect(typeof addressBr.publicArea).toBe('string');
        expect(typeof addressBr.city).toBe('string');
        expect(typeof addressBr.state).toBe('string');
        expect(typeof addressBr.postalCode).toBe('string');
        expect(addressBr.publicArea).toEqual(mockBrAddress.logradouro);
        expect(addressBr.city).toEqual(mockBrAddress.localidade);
        expect(addressBr.state).toEqual(mockBrAddress.uf);
        expect(addressBr.postalCode).toEqual(mockBrAddress.cep);
    });
});
