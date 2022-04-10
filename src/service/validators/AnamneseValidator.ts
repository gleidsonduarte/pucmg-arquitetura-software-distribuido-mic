class AnamneseValidator {
    public validateConstructor(anamnese: any) {
        if (!anamnese.bloodGroup) {
            throw new Error('Grupo sanguíneo não pode ser nulo ou vazio!');
        }

        if (!anamnese.chronicConditions) {
            throw new Error('Condições crônicas não podem ser nulas ou vazias!');
        }

        if (!anamnese.allergies) {
            throw new Error('Alergia não pode ser nula ou vazia!');
        }
    }
}

export default new AnamneseValidator();
