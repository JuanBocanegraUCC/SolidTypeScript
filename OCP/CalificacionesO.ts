class StudentO {
  constructor(public id: number, public name: string) {}
}

abstract class Grade {
  constructor(public student: StudentO, public course: string) {}
  abstract calculateGrade(): number;
}

class NumericGrade extends Grade {
  constructor(student: StudentO, course: string, public score: number) {
      super(student, course);
  }

  calculateGrade(): number {
      return this.score;
  }
}

class LetterGrade extends Grade {
  constructor(student: StudentO, course: string, public letter: string) {
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
  constructor(student: StudentO, course: string, public passed: boolean) {
      super(student, course);
  }

  calculateGrade(): number {
      return this.passed ? 100 : 0;
  }
}

// Uso
const student1O = new StudentO(1, 'Juan Pérez');
const student2O = new StudentO(2, 'María García');

const numericGrade = new NumericGrade(student1O, 'Calculo', 95);
const BDDGrade = new LetterGrade(student1O, 'BasedeDatos', 'A');
const passFailGrade = new PassFailGrade(student2O, 'Electiva', true);

console.log(`${student1O.name} su nota en Calculo es:`, numericGrade.calculateGrade());
console.log(`${student1O.name} su nota en Base de Datos es:`, BDDGrade.calculateGrade());
console.log(`${student2O.name} su nota en Electiva es:`, passFailGrade.calculateGrade());
