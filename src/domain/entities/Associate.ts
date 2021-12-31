import AssociateValidator from '../../service/validators/AssociateValidator';
import { AssociateInterface } from '../interfaces/entities/AssociateInterface';
import { Anamnese } from './Anamnese';
import { Exam } from './Exam';
import { Person } from './Person';

export class Associate extends Person implements AssociateInterface {
    public readonly anamnese: Anamnese;
    public readonly exam: Exam;

    constructor(person: any) {
        AssociateValidator.validateConstructor(person);

        super(person);
        this.anamnese = new Anamnese(person.anamnese);
        this.exam = new Exam(person.exam);
    }
}
