class StudentL {
    constructor(public id: number, public name: string) {}
}

class Course {
    constructor(public code: string, public name: string) {}
}

// Función que envía la notificación del curso
function sendCourseNotification(notification: Notification, student: StudentL, course: Course): void {
    notification.send(student, course);
}

// Uso de las clases y función para enviar notificaciones
const student1L = new StudentL(1, 'Juan Pérez');
const student2L = new StudentL(2, 'María García');

const courseCaulculoL = new Course('MATH101', 'Matemáticas');
const courseBasedeDatosL = new Course('BDD101', 'BasedeDatos');

sendCourseNotification(new EmailNotificationL(), student1L, courseCaulculoL);
sendCourseNotification(new SMSNotificationL(), student2L, courseBasedeDatosL);
