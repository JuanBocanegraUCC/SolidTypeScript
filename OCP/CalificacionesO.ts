class Estudiante {
    constructor(public id: number, public name: string) {}
  }
  
  abstract class Grade {
    constructor(public student: Student, public course: string) {}
    abstract calculateGrade(): number;
  }
  
  class NumericGrade extends Grade {
    constructor(student: Student, course: string, public score: number) {
      super(student, course);
    }
  
    calculateGrade(): number {
      return this.score;
    }
  }
  
  class LetterGrade extends Grade {
    constructor(student: Student, course: string, public letter: string) {
      super(student, course);
    }
  
    calculateGrade(): number {
      switch (this.letter) {
        case 'A': return 90;
        case 'B': return 80;
        case 'C': return 70;
        case 'D': return 60;
        case 'F': return 50;
        default: return 0;
      }
    }
  }
  
  class PassFailGrade extends Grade {
    constructor(student: Student, course: string, public passed: boolean) {
      super(student, course);
    }
  
    calculateGrade(): number {
      return this.passed ? 100 : 0;
    }
  }
  
  // Uso
  const estudiante1 = new Student(1, 'Juan Pérez');
  const estudiante2 = new Student(2, 'María García');
  
  const numericGrade = new NumericGrade(student1, 'Matemáticas', 95);
  const letterGrade = new LetterGrade(student1, 'Historia', 'A');
  const passFailGrade = new PassFailGrade(student2, 'Educación Física', true);
  
  console.log(`${student1.name}'s grade in Matemáticas:`, numericGrade.calculateGrade());
  console.log(`${student1.name}'s grade in Historia:`, letterGrade.calculateGrade());
  console.log(`${student2.name}'s grade in Educación Física:`, passFailGrade.calculateGrade());