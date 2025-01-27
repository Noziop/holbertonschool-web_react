// Tâche 1: Interface Teacher
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Tâche 2: Interface Directors
interface Directors extends Teacher {
    numberOfReports: number;
}

// Tâche 3: Function printTeacher
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Tâche 4: Class StudentClass
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Tests
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};

console.log(teacher3);

const director1: Directors = {
    firstName: 'Jane',
    lastName: 'Smith',
    location: 'Boston',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

console.log(printTeacher("John", "Doe"));

const student1 = new StudentClass("Alice", "Johnson");
console.log(student1.workOnHomework());
console.log(student1.displayName());
