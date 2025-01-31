// Tâche 5: Interfaces et Classes Director/Teacher
export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  export class Director implements DirectorInterface {
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
  
  export class Teacher implements TeacherInterface {
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
  
  export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  
  // Tâche 6: Prédicat de type et exécution
  export function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
    return (employee as DirectorInterface).workDirectorTasks !== undefined;
  }
  
  export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    return isDirector(employee) 
      ? employee.workDirectorTasks() 
      : employee.workTeacherTasks();
  }
  
  // Tâche 7: Types littéraux
  export type Subjects = "Math" | "History";
  
  export function teachClass(todayClass: Subjects): string {
    return `Teaching ${todayClass}`;
  }
  
  // Tests
  console.log(createEmployee(200)); // Teacher
  console.log(createEmployee(1000)); // Director
  console.log(createEmployee('$500')); // Director
  
  console.log(executeWork(createEmployee(200))); // Getting to work
  console.log(executeWork(createEmployee(1000))); // Getting to director tasks
  
  console.log(teachClass('Math')); // Teaching Math
  console.log(teachClass('History')); // Teaching History
  