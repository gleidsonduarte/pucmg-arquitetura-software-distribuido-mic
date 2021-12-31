class AnamneseValidator {
    public validateConstructor(anamnese: any) {
        if (!anamnese.bloodGroup) {
            throw new Error('Blood group cannot be null or empty!');
        }

        if (!anamnese.chronicConditions) {
            throw new Error('Chronic conditions cannot be null or empty!');
        }

        if (!anamnese.allergies) {
            throw new Error('Allergies cannot be null or empty!');
        }
    }
}

export default new AnamneseValidator();
