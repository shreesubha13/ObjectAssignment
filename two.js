class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.courses = [];
    }

    enroll(course) {
        this.courses.push(course);
        console.log(`${this.name} has enrolled in ${course}.`);
    }

    showCourses() {
        console.log(`${this.name}'s enrolled courses: ${this.courses.join(', ')}`);
    }
}

class Admission {
    constructor() {
        this.students = [];
    }

    enrollStudent(student) {
        this.students.push(student);
        console.log(`${student.name} has been enrolled.`);
    }

    assignCourse(student, course) {
        if (student instanceof Student && student.email && course) {
            student.enroll(course);
        } else {
            console.log('Invalid student or course information.');
        }
    }

    showEnrolledStudents() {
        console.log('Enrolled students:');
        this.students.forEach(student => {
            console.log(`- ${student.name} (${student.email})`);
        });
    }
}


const admissionOffice = new Admission();

const student1 = new Student('geetha','geetha@.gmail');
const student2 = new Student('ram', 'ram@.gmail');

admissionOffice.enrollStudent(student1); 
admissionOffice.enrollStudent(student2); 

admissionOffice.assignCourse(student1, 'Full Stack Web Development'); 
admissionOffice.assignCourse(student2, 'Artificial Intelligence'); 

student1.showCourses(); 
student2.showCourses(); 

admissionOffice.showEnrolledStudents();

