import { Associate } from "../../domain/entities/Associate";

class AssociateValidator {
    public validateConstructor(associate: Associate) {
        if (!associate.anamnese) {
            throw new Error('Anamnese não pode ser nulo ou vazio!');
        }
    }
}

export default new AssociateValidator();
