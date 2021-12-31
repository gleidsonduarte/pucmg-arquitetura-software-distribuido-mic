import ExamValidator from "../../service/validators/ExamValidator";
import { ExamInterface } from "../interfaces/entities/ExamInterface";

export class Exam implements ExamInterface {
    public readonly examDate: Date;
    public readonly healthInsurance: string;
    public readonly examType: string;
    public readonly examLocation: string;
    public readonly examObservation: string;
    public readonly doctor: string;
    public readonly billNumber: number;
    public readonly totalPaid: number;

    constructor(exam: any) {
        ExamValidator.validateConstructor(exam);

        this.examDate = exam.examDate;
        this.healthInsurance = exam.healthInsurance;
        this.examType = exam.examType;
        this.examLocation = exam.examLocation;
        this.examObservation = exam.examObservation;
        this.doctor = exam.doctor;
        this.billNumber = exam.billNumber;
        this.totalPaid = exam.totalPaid;
    }
}
