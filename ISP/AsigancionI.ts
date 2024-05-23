// Definición de la clase Student
class StudentI {
    constructor(public id: number, public name: string) {}
}

// Implementación de la interfaz Enroll
class UniversityEnrollmentI implements IMatricular {
    enroll(student: StudentI, course: string): void {
        console.log(`Enrolling ${student.name} in ${course}`);
        // Lógica adicional de matriculación podría ir aquí
    }
}

// Implementación de la interfaz Grade
class UniversityGradingI extends ISemestre {
    constructor(student: StudentI, course: string, public grade: number) {
        super(student, course);
    }

    calculateGrade(): number {
        return this.grade;
    }

    assignGrade(student: StudentI, course: string, grade: number): void {
        console.log(`Assigning grade ${grade} to ${student.name} for ${course}`);
    }
}

// Uso de las clases y funciones para matriculación y calificación
const student1I = new StudentI(1, 'Juan Pérez');
const student2I = new StudentI(2, 'María García');

const universityEnrollment = new UniversityEnrollment();
const universityGrading = new UniversityGradingI();

universityEnrollment.enroll(student1I, 'Biología');
universityGrading.assignGrade(student1I, 'Biología', 85);

universityEnrollment.enroll(student2I, 'Matemáticas');
universityGrading.assignGrade(student2I, 'Matemáticas', 92);