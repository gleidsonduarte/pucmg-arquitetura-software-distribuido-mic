class ExamValidator {
    public validateConstructor(exam: any) {
        if (!exam.examDate) {
            throw new Error('Exam date cannot be null or empty!');
        }

        if (!exam.healthInsurance) {
            throw new Error('Health insurance cannot be null or empty!');
        }

        if (!exam.examType) {
            throw new Error('Exam type cannot be null or empty!');
        }

        if (!exam.examLocation) {
            throw new Error('Exam location cannot be null or empty!');
        }

        if (!exam.examObservation) {
            throw new Error('Exam observation cannot be null or empty!');
        }

        if (!exam.doctor) {
            throw new Error('Doctor cannot be null or empty!');
        }

        if (!exam.billNumber) {
            throw new Error('Bill number cannot be null or empty!');
        }

        if (!exam.totalPaid) {
            throw new Error('Total paid cannot be null or empty!');
        }
    }
}

export default new ExamValidator();
