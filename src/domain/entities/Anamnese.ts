import AnamneseValidator from "../../service/validators/AnamneseValidator";
import { AnamneseInterface } from "../interfaces/entities/AnamneseInterface";

export class Anamnese implements AnamneseInterface {
    public readonly bloodGroup: string;
    public readonly chronicConditions: string;
    public readonly allergies: string;

    constructor(anamnese: any) {
        AnamneseValidator.validateConstructor(anamnese);

        this.bloodGroup = anamnese.bloodGroup;
        this.chronicConditions = anamnese.chronicConditions;
        this.allergies = anamnese.allergies;
    }
}
