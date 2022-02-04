import { Anamnese } from "../../../../src/domain/entities/Anamnese";

describe("Create anamnese", () => {
    it("Should be able to create a new anamnese", () => {
        const mockAnamnese: Anamnese = {
            "bloodGroup": "TestBloodGroup",
            "chronicConditions": "TestChronicConditions",
            "allergies": "TestAllergies"
        };

        const anamnese = new Anamnese(mockAnamnese);

        expect(anamnese).toBeInstanceOf(Anamnese);
        expect(typeof anamnese.bloodGroup).toBe('string');
        expect(typeof anamnese.chronicConditions).toBe('string');
        expect(typeof anamnese.allergies).toBe('string');
        expect(anamnese.bloodGroup).toEqual(mockAnamnese.bloodGroup);
        expect(anamnese.chronicConditions).toEqual(mockAnamnese.chronicConditions);
        expect(anamnese.allergies).toEqual(mockAnamnese.allergies);
    });
});
