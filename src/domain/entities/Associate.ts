import AssociateValidator from '../../service/validators/AssociateValidator';
import { AssociateInterface } from '../interfaces/entities/AssociateInterface';
import { ExamInterface } from '../interfaces/entities/ExamInterface';
import { Anamnese } from './Anamnese';
import { Exam } from './Exam';
import { Person } from './Person';

export class Associate extends Person implements AssociateInterface {
    public readonly anamnese: Anamnese;
    public readonly exam: Array<ExamInterface> = [];

    constructor(person: any) {
        super(person);
        
        AssociateValidator.validateConstructor(person);

        this.anamnese = new Anamnese(person.anamnese);

        if (person.hasOwnProperty('exam') && person.exam.length > 0) {
            for (const exam of person.exam) {
                this.exam.push(new Exam(exam));
            }
        }
    }
}
