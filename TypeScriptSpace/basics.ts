//Primitivos: number, string, boolean
//Objetos: arrays, objects
//Function types, parameters


let age: number; 
age = 18; 

let userName: string = "hola mundo";

let isInstructor: boolean; 
isInstructor = false; 

let hobbies: string[]; 
hobbies = ['music', 'sports', 'surfing'];


//Declaracion formal de un tipo persona
let person: {
    name:string;
    age:number;
    isEmploye:boolean; 
}; 


//Definicion de un objeto tipo persona
person = {
    name: "max",
    age: 32,
    isEmploye:false
}

/* Array de objetos */
let people : {
    name:string;
    age:number;
    isEmploye:boolean; 
}[]; 


//Inferencia de tipos: Se infieren tipos a partir de su inicializacion, no es necesario declararlo explicitamente

 //Se puede definir el tipo en la propia inicializacion y se restringe a ese tipo a partir de la asignacion

let course = "Reach - The complete Guide";
//course = 12341;  //Se produce error debido a que se ha hecho inferencia de tipos en la declaracion anterior

///////////////////////////////////////////////////////
//Tipos UNION: permiten definir el tipo de dato de una variable como un conjunto acotado de potenciales tipos de datos
///////////////////////////////////////////////////////

let StudentIdentifier: number | string; //En este caso se esta declarando formalmente que el tipo de dato de un identificador de estudiante
                                        //puede ser numero o cadena de texto
let x : boolean | string | number; //Se pueden definir tantos tipos de datos como se deseen


////////////////
// ALIAS
////////////////////


//Type es lo mismo que typedef en C o C++, definicion de un nuevo tipo personalizado de tipo
type Person = {
    name:string;
    age:number; 
}

let myPersonObject : Person; 
////////////////
// FUNCIONS & TYPES
////////////////////

function add(a:number, b:number): number{ //Si no se pone ":number" se infiere del return
    return a + b;
}

function sumOrCocatenate(a:number, b:number): number | string{ 
    return a + b;
}


function print(value:any): void { //Void es para indicar que no se retorna nada.
    console.log(value); 
}

//Generics
function insertAtBeginning<T>(array: T[], value:T){
    const newArray = [value, ...array]; 
    return newArray; 
}

const demoArray: number[] = [1,2,3]; 
const updatedArray = insertAtBeginning<number>(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning<string>(['b','c','d'], 'a') // ['a', ',b', 'c', 'd']


////////////////
// CLASES 
////////////////////

class Student {
                                               /* firstName: string; 
                                               lastName: string; 
                                               age: number; 
                                               private courses: string[];  */

    constructor(                               // constructor(first: string, last:string, age:number, courses:string[]){
        public firstName: string,              //this.firstName = first; 
        public lastName: string,               //this.lastName = last; 
        public age: number,                    //this.age = age;                   
        private courses: string[]              //this.courses = courses;
    ) {}; 
     
        
        

    enrol(courseName: string){
        this.courses.push(courseName); 
    }

    listCourses() : string[] {
        return this.courses.slice(); 
    }
}

const student = new Student('Michael', 'gonzalez ruiz', 45, ['Angular'])
student.enrol('React'); 
//student.courses //ERROR: variable


////////////////
// CLASES 
////////////////////

interface Human {
    firstName: string;
    age: number; 
    greet: () => void; 
}; 
let maikel: Human; 
maikel = {
    firstName: "Michael",
    age: 32,
    greet() {console.log("Hey, I'm michael")}
}; 

class Instructor implements Human {
    constructor(public firstName:string, public age: number){}
    greet() {
        console.log('Hellooo!!!'); 
    }
} 

