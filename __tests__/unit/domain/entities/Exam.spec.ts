import { Exam } from "../../../../src/domain/entities/Exam";

describe("Create exam", () => {
    it("Should be able to create a new exam", () => {
        const mockExam: Exam = {
            "examDate": new Date("2021/10/30"),
            "healthInsurance": "Sulamérica",
            "examType": "Sangue",
            "examLocation": "Avenida Morumbi",
            "examObservation": "Saúde 100%",
            "doctor": "Dr. House",
            "billNumber": 112235,
            "totalPaid": 150.99
        };

        const exam = new Exam(mockExam);

        expect(exam).toBeInstanceOf(Exam);
        expect(exam.examDate).toBeInstanceOf(Date);
        expect(typeof exam.healthInsurance).toBe('string');
        expect(typeof exam.examType).toBe('string');
        expect(typeof exam.examLocation).toBe('string');
        expect(typeof exam.examObservation).toBe('string');
        expect(typeof exam.doctor).toBe('string');
        expect(typeof exam.billNumber).toBe('number');
        expect(typeof exam.totalPaid).toBe('number');
        expect(exam.examDate).toEqual(mockExam.examDate);
        expect(exam.healthInsurance).toEqual(mockExam.healthInsurance);
        expect(exam.examType).toEqual(mockExam.examType);
        expect(exam.examLocation).toEqual(mockExam.examLocation);
        expect(exam.examObservation).toEqual(mockExam.examObservation);
        expect(exam.doctor).toEqual(mockExam.doctor);
        expect(exam.billNumber).toEqual(mockExam.billNumber);
        expect(exam.totalPaid).toEqual(mockExam.totalPaid);
    });
});
