import { Associate } from "../../domain/entities/Associate";

class AssociateValidator {
    public validateConstructor(associate: Associate) {
        if (!associate.anamnese) {
            throw new Error('Anamnese cannot be null or empty!');
        }

        if (!associate.exam) {
            throw new Error('Exam cannot be null or empty!');
        }
    }
}

export default new AssociateValidator();
