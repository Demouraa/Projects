// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function Types, parameters

// Primitives

let age: number;

age =12;

let userName: string
userName = 'Max';

let isInstructor: boolean;

isInstructor = true;


// More Complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
    name:string;
    age: number;
};

person  = {
    name: 'Matheus',
    age: 24
}

// person = {
//     isEmployee: true
// }

let people: {
    name: string;
    age: number;
}[];



// Type inference, where the type is infered

let course = 'React - The Complete Guide';

// course = 12345; will return error

//union type

let course2: string | number = 'test'

course2 = 12345;


// FUnctions & Types

function add(a: number, b: number): number {
    return a + b;
}


// Generics/ also called type assertion??

function insertAtBegginning(array: any[], value: any) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBegginning(demoArray, -1);
const stringArray = insertAtBegginning(['a', 'b', 'c'], 'd');

//updatedArray[0].split('');


//classes and interfaces


class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor( 
        public first: string, 
        public last: string, 
        private age: number,
        private courses: string[]
        ) {}

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Mathues', 'Gomes', 24, ['Angular']);
student.enrol('React');

//student.listCourses(); => Angular React

//student.courses => Angular, React

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;
max = {
    firstName: 'Matheus',
    age: 32,
    greet() {
        console.log('Hello!');
    },
};

class INstructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!!!!');
    }
}