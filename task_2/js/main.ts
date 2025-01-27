// Tâche 5: Interfaces et Classes Director et Teacher
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) return new Teacher();
    return new Director();
}

// Tâche 6: Type predicate et fonction executeWork
function isDirector(employee: Teacher | Director): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}

// Tâche 7: String literal types
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    return todayClass === "Math" ? "Teaching Math" : "Teaching History";
}

// Tests
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

console.log(teachClass('Math'));
console.log(teachClass('History'));
