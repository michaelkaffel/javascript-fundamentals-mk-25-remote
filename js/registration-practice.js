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
        this.students = students
    }
    registerStudent(studentToRegister) {
        if (studentToRegister.name === undefined || studentToRegister.email === undefined) {
            console.log(`Invalid name or email`);
            return false;
        }

        for (let student of this.students) {
            // console.log(`TEST: ${student.email}`)
            if (studentToRegister.email === student.email) {
                // console.log(`TEST 2: The test worked.`);
                console.log(`There is already someone registred with your email. Please try again.`)
                return false;
            }

        }
        this.students.push(studentToRegister);
        console.log(`You have successfully registred "${studentToRegister.name}" for the ${this.name} course`);
        return true;


    }
    listStudents() {
        if (this.students.length === 0) {
            console.log(`No students are registred in this course.`);
            return false;
        } else {
            console.log(`The students registered in ${this.name} are:`)
            for (let student of this.students) {
                console.log(`Name: ${student.name}   Email: ${student.email}`)
            }
            return true;
        }
    }
}



// let student1 = new Student("Michael Kaffel", "email@email.com");

// console.log(student1);

// let bootcamp1 = new Bootcamp("React Fundamentals", "advanced");

// console.log(bootcamp1);


// bootcamp1.registerStudent(student1);

// console.log(bootcamp1);

// let student2 = new Student("Samwise Gangee", "samewise@theshire.com");
// bootcamp1.registerStudent(student2);
// bootcamp1.registerStudent(student2);
// console.log(bootcamp1);

// let student3 = new Student();
// console.log(student3);

// bootcamp1.registerStudent(student3);

// bootcamp1.listStudents();



testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if (testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if (reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
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

