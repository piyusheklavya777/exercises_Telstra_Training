// in 01-exercises.md refer to line 160 for Questions on Typescript - 1 to 10.

//PRE-BUILD INSTRUCTIONS:
// Following code must be kept in .ts file and
//tsconfig.json file should be created pointing to source and destination of TS-JS conversion

//In scripts of package.json "build": "tsc" .
//tsconfig file.( Change outDir, rootDir as necessary )
//   {
//     "compilerOptions": {
//                     "target": "es5",
//                     "module": "es2015",
//                     "outDir": "./dist",
//                     "rootDir": "./src"
//     }
//   }
  


//Q1

type sumOperation = ( x : number[] ) => number;

const sumArray :sumOperation = function( arr) {
    let sum = 0;
   for(let i=0;i<arr.length; i++) {
       sum+= arr[i]
   } return sum;
};

let result = sumArray( [ 1, 2, 3, 4 ] );
console.log( result ); // 10


type sqOperation = ( x : number[] ) => number[];

const squareEach :sqOperation = function( arr ) {
    let result : number = [];
   for(let i=0;i<arr.length; i++) {
       result[i] = arr[i]*arr[i];
   } return result;
};

//Q2
function squareEach(arr: number[]): number[] {
     let result = [];
   for(let i=0;i<arr.length; i++) {
       result[i] = arr[i]*arr[i];
   } return result;
}

let result = squareEach( [ 1, 2, 3, 4 ] );
console.log( result ); // [ 1, 4, 9, 16 ]

//Q3

function contains (arr: any[], key: any) {
    for(let i=0;i<arr.length; i++) {
       if(arr[i]===key) return true;
    } return false;
}

console.log( contains( [ 1, 'hello', 3, true ], 3 ) ); // prints true
console.log( contains( [ 1, 'hello', 3, true ], 5 ) ); // prints false

//Q4
type fntype = (x: number) => number;

function map(arr: number[], fn : fntype ): number[] {
    let result = [];
    for(let i=0; i<arr.length;i++) {
          result[i] =fn(arr[i]);
    } return result;

}
const square : fntype = x => x * x;
const cube :   fntype = x => x * x * x;

console.log( map( [ 1, 2, 3, 4 ], square ) ); // prints [ 1, 4, 9, 16 ]
console.log( map( [ 1, 2, 3, 4 ], cube ) ); // prints [ 1, 8, 27, 64 ]

//Q5
type fntype = (x: number) => boolean;

function filter(arr: number[], f: fntype) : number[] {
    let result :number[] = []
     for(let i=0; i<arr.length;i++) {
         if(f(arr[i])) {
             result.push(arr[i])
         } 
     } return result;
}
const isOdd: fntype = ( x)=>  {
    return x % 2 === 1;
}
let filteredList = filter( [ 1, 2, 3, 4, 5, 6, 7, 8 ], isOdd ); // [ 1, 3, 5, 7 ]
console.log(filteredList)

//Q6
type smallFNtype = (x: number) => number;

function exponentFactory(n: number) {

    const square: smallFNtype = x =>  x*x;
    const cube:   smallFNtype = x =>  x*x*x;
    const othernumbers : smallFNtype = x => x;

    if(n===2) return square;
    if(n===3) return cube;
    else return othernumbers;
}

var fn;

fn = exponentFactory( 2 );
console.log( fn( 5 ) ); // prints 25;

fn = exponentFactory( 3 );
console.log( fn( 5 ) ); // prints 125;

fn = exponentFactory( 4 );
console.log( fn( 5 ) ); // prints 5;

//Q7
function push(arr: number[], secondArg: number | number[] ) {
    if(typeof secondArg ==="number" ) 
        arr = [...arr, secondArg]
    
    else  arr = [...arr, ...secondArg ];
        
    console.log(arr); return arr;
}

push([1,2,3], 4);
push([11,22,33], [44,55]);

//Q 7b overloading
function log(msg: string, ) :void {
        console.log(msg);
}

type format = "standard" | "verbose";

function log(msg: string, formatvar : format): void {
    if(formatvar==="verbose") {
        let today = new Date();
        console.log(msg+today.getDate())
    }
    else console.log(msg);
}

//Q7c
type cartype = 'hatchback' | 'sedan' | 'suv';

function hireCar(endDate: Date, car='sedan': cartype) {
    let res = {
        startDate : new Date().getDate(),
        endDate : endDate,
        cartype : car,
        
    }
}

function hireCar(startDate: Date, endDate: Date,  car='sedan': cartype) {
    
}

//Q 8
interface IClock {
    type: ('digital' | 'analog'),
    time : {
        hours: number, minutes: number, seconds: number,
    },
    setTime: ( hours: number, minutes: number, seconds: number) => string,
    getTime : () => string
}

let clk1 : IClock = {
    type : 'analog',
    time: { hours: 17, minutes: 36, seconds:0  },
    setTime(hours: number, minutes: number, seconds: number) {
        this.time.hours = hours;
        this.time.minutes = minutes;
        this.time.seconds = seconds;
    },
    getTime() {
        return `${this.type} clock time: ${this.time}`;
    }

}

console.log(clk1.setTime(18,30,45));
console.log(clk1.getTime());

//Q9
class Project {
    constructor(id:number, public name:string, private client: string) {
        this.id = id; this.name = name; this.client = client;
    }
}

const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' );

//Q10

class Employee {
    constructor(id:number, public name:string, public department: string, private projects: string[]) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.projects = projects;
    }
    public newProject:(newp:Project)=>void = (newp)=>{
        this.projects.push(project);
}

const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );
const jane = new Employee( 2, 'Jane', 'Project Manager', 'IT', [ dbsPayroll, intranetDeployment ] );
const mark = new Employee( 3, 'Mark', 'System Administrator', 'Operations', [ intranetDeployment ] );

}
