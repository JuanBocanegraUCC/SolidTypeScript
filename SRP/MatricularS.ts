class StudentS {
  constructor(public id: number, public name: string) {}
}

class CourseS {
  constructor(public code: string, public name: string) {}
}

class Enrollment {
  private enrollments: { [studentId: number]: string[] } = {};

  enroll(student: StudentS, course: CourseS): void {
      if (!this.enrollments[student.id]) {
          this.enrollments[student.id] = [];
      }
      if (this.enrollments[student.id].includes(course.code)) {
          console.log(`${student.name} está matriculado en ${course.name}`);
      } else {
          this.enrollments[student.id].push(course.code);
          console.log(`Matriculado ${student.name} en el curso ${course.name}`);
      }
  }

  getEnrollments(student: StudentS): string[] {
      return this.enrollments[student.id] || [];
  }

  isEnrolled(student: StudentS, course: CourseS): boolean {
      return this.enrollments[student.id]?.includes(course.code) ?? false;
  }
}

// Uso
const student1S = new StudentS(1, 'Juan Pérez');
const student2S = new StudentS(2, 'María García');

const courseCalculoS = new CourseS('Calculo101', 'Calculo');
const courseBasedeDatosS = new CourseS('BDD101', 'BasedeDatos');

const enrollment = new Enrollment();

// Matriculando estudiantes
enrollment.enroll(student1S, courseCalculoS);
enrollment.enroll(student1S, courseBasedeDatosS);
enrollment.enroll(student2S, courseCalculoS);

// Intentando matricular en el mismo curso
enrollment.enroll(student1S, courseCalculoS);

// Verificando matriculaciones
console.log(`${student1S.name} está matriculado en:`, enrollment.getEnrollments(student1S));
console.log(`${student2S.name} está matriculado en:`, enrollment.getEnrollments(student2S));

// Verificando si un estudiante está matriculado en un curso específico
console.log(`${student1S.name} está matriculado en ${courseCalculoS.name}:`, enrollment.isEnrolled(student1S, courseCalculoS));
console.log(`${student1S.name} está matriculado en ${courseBasedeDatosS.name}:`, enrollment.isEnrolled(student1S, courseBasedeDatosS));
console.log(`${student2S.name} está matriculado en ${courseBasedeDatosS.name}:`, enrollment.isEnrolled(student2S, courseBasedeDatosS));
