class Student {
    constructor(public id: number, public name: string) {}
  }
  
  class Course {
    constructor(public code: string, public name: string) {}
  }
  
  class Enrollment {
    private enrollments: { [studentId: number]: string[] } = {};
  
    enroll(student: Student, course: Course): void {
      if (!this.enrollments[student.id]) {
        this.enrollments[student.id] = [];
      }
      if (this.enrollments[student.id].includes(course.code)) {
        console.log(`${student.name} is already enrolled in ${course.name}`);
      } else {
        this.enrollments[student.id].push(course.code);
        console.log(`Enrolling ${student.name} in course ${course.name}`);
      }
    }
  
    getEnrollments(student: Student): string[] {
      return this.enrollments[student.id] || [];
    }
  
    isEnrolled(student: Student, course: Course): boolean {
      return this.enrollments[student.id]?.includes(course.code) ?? false;
    }
  }
  
  // Uso
  const student1 = new Student(1, 'Juan Pérez');
  const student2 = new Student(2, 'María García');
  
  const courseMath = new Course('MATH101', 'Matemáticas');
  const courseHistory = new Course('HIST101', 'Historia');
  
  const enrollment = new Enrollment();
  
  // Matriculando estudiantes
  enrollment.enroll(student1, courseMath);
  enrollment.enroll(student1, courseHistory);
  enrollment.enroll(student2, courseMath);
  
  // Intentando matricular en el mismo curso
  enrollment.enroll(student1, courseMath);
  
  // Verificando matriculaciones
  console.log(`${student1.name} is enrolled in:`, enrollment.getEnrollments(student1));
  console.log(`${student2.name} is enrolled in:`, enrollment.getEnrollments(student2));
  
  // Verificando si un estudiante está matriculado en un curso específico
  console.log(`${student1.name} is enrolled in ${courseMath.name}:`, enrollment.isEnrolled(student1, courseMath));
  console.log(`${student1.name} is enrolled in ${courseHistory.name}:`, enrollment.isEnrolled(student1, courseHistory));
  console.log(`${student2.name} is enrolled in ${courseHistory.name}:`, enrollment.isEnrolled(student2, courseHistory));