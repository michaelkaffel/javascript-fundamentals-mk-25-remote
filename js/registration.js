class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}


class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        if (!studentToRegister.name || !studentToRegister.email) {
            console.log('Invalid name or email');
        return false;
        }
        for (let student of this.students) {
            if (studentToRegister.email.toLowerCase() === student.email.toLowerCase()) {
                console.log(`The email are are using is already registered`);
                return false
            }     
        }
        this.students.push(studentToRegister);
                console.log(`Registration successful!`);
                return true
    }
    listStudents() {
        
        if (this.students.length < 1) {
            console.log(`No students`);
            return false;
        } else {
            console.log(`The students registered in ${this.name} are:`)
            for (let student of this.students) {
                console.log(`Name: ${student.name} - Email: ${student.email}`)
                
            }
        } return true
    }
    getInfo() {
        return `The name of the bootcamp is "${this.name}" with a skill level of "${this.level}".`
    }
    removeStudent(email) {
        for (let i = 0; i < this.students.length; i++) {
            if (email.toLowerCase() === this.students[i].email.toLowerCase()) {
                console.log(`You are removing ${this.students[i].name} from the course.`)
                this.students.splice(i, 1);
                console.log(`You have unregistred the user from the course`)
                return;
            }
        }
        console.log(`User not found`);
    }
}



// let student1 = new Student("sammy", "email@email.com");
// let student2 = new Student("Michael", "thisemail@email.com");
// console.log(student1);
// let bootcamp1 = new Bootcamp("Bootcamp 1", "advanced")
// console.log(bootcamp1);
// bootcamp1.registerStudent(student1);

// bootcamp1.listStudents();

// bootcamp1.registerStudent(student2);
// bootcamp1.listStudents();
// bootcamp1.removeStudent("thisemail@email.com");
// bootcamp1.listStudents();








testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}

const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }
};
runTest(reactBootcamp, testStudent);
