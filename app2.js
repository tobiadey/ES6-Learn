/* 
Basic ES6 (cheatsheet)

Leonard, D. (2022). es6-cheatsheet. [online] GitHub. 
Available at: https://github.com/DrkSephy/es6-cheatsheet 
[Accessed 7 Mar. 2022].

Sarah Chima Atuonwu. freeCodeCamp.org. (2020). Var, Let, and Const – What’s the Difference? [online] 
Available at: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/#:~:text=var%20declarations%20are%20globally%20scoped%20or%20function%20scoped%20while%20let 
[Accessed 8 Mar. 2022].

Amy Haddas. freeCodeCamp.org. (2020). Arrow Function JavaScript Tutorial – How to Declare a JS Function with the New ES6 Syntax. [online] 
Available at: https://www.freecodecamp.org/news/arrow-function-javascript-tutorial-how-to-declare-a-js-function-with-the-new-es6-syntax/ 
[Accessed 8 Mar. 2022].
‌
*/




/*
Var / let / const

var declarations are globally scoped or function scoped while let and const are block{} scoped.
var variables can be updated and re-declared within its scope. 
let variables can be updated but not re-declared. 
const variables can neither be updated nor re-declared. 
They are all hoisted to the top of their scope.var as unndefined, let and const are not initialised.
While var and let can be declared without being initialised,
const must be initialised during declaration.

Best Practice: 
- Leave var declarations inside of legacy code to denote that it needs to be carefully refactored. 
- use let for variables that will change their value over time and
- const for variables which cannot be reassigned.
*/
//var
console.log('\n')  //add space
console.log('var/let/const') //header

var greeter = "hey hi (var)";
var ttimes = 4;

if (ttimes > 3) {
    var greeter = "say Hello from inside if statement (var)"; 
}

console.log(greeter) // "say Hello instead"

//let
let greeting = "say Hi (let)";
let times = 4;

if (times > 3) {
     let hello = "say Hello from inside if statement (let)";
     console.log(hello);// "say Hello instead"
 }
// console.log(hello) // hello is not defined



/*
Arrow Functions
*/
console.log('\n')  //add space
console.log('Arrow Functions') //header

//Function expression
const addNumbers1 = function(number1, number2) {
    return number1 + number2;
 };
 
 //Arrow function expression
 const addNumbers2 = (number1, number2) => number1 + number2;

 console.log(addNumbers1(1, 2));//Result: 3
 console.log(addNumbers2(1, 2));//Result: 3

//Arrow function expression
const arr = [1, 2, 3, 4, 5];
const squares = arr.map(x => x * x); // Arrow Function for terser implementation
console.log(squares);

//Arrow function expressionn for object literal expression
const f = () => ({
    city:"Boston"
   })
console.log(f().city)


/*
Strings
*/
console.log('\n')  //add space
console.log('Strings') //header

//.inlcude() to check substring of another string
const string = 'food';
const substring = 'foo';

console.log(string.includes(substring)); // true


//.reapeat() string x times
let words = 'meow '.repeat(3); // 'meow meow meow'
console.log(words);

//Template Literals

//using special characters
let text = `This string contains "double quotes" which don't need to be escaped anymore.`;
console.log(text);

//concatinating
let name = 'Tiger';
let age = 13;

console.log(`My cat is named ${name} and is ${age} years old.`);

//handling new lines
// Template Literals will preserve new lines without having to explicitly place them in
let textt = ( `cat
dog
nickelodeon`
);

console.log(textt);

/*
Destructuring
Destructuring allows us to extract values from arrays and objects (even deeply nested) 
and store them in variables with a more convenient syntax.
*/
console.log('\n')  //add space
console.log('Destructuring') //header


//Destructuring Arrays
let [a, b, c, d] = [1, 2, 3, 4];

console.log(a); // 1
console.log(b); // 2

//Destructuring Objects
let luke = { occupation: 'jedi', father: 'anakin' };
let {occupation, father} = luke;

console.log(luke.occupation); // 'jedi'
console.log(luke.father); // 'anakin'
console.log(occupation); // 'jedi'
console.log(father); // 'anakin'

/*
Parameters
*/
console.log('\n')  //add space
console.log('Parameters') //header

//Default Parameters
function addTwoNumbers(x=0, y=0) {
    return x + y;
}
addTwoNumbers(2, 4); // 6
addTwoNumbers(2); // 2
addTwoNumbers(); // 0

//Rest Parameters
let xP = 0
function logArguments(...args) {
    for (let arg of args) {
        xP++;
        console.log('number of args',arg);
    }

}
console.log(xP);
logArguments(1,6,5,2,5)
console.log(xP);

//Named Parameters
function initializeCanvas(
    { height=600, width=400, lineStroke='black'}) {
        // Use variables height, width, lineStroke here
        console.log(height);
    }
function initializeCanvas2(
    { height=600, width=400, lineStroke='black'} = {}) {
    // ...
    console.log(height);

}
initializeCanvas(200) // returns error if no parameter is passed, if param is passed it overides it with 600 anyways
initializeCanvas2() // returns 600 


//Spread Operator
let y = Math.max(...[-1, 100, 9001, -32]); // 9001

let cities = ['San Francisco', 'Los Angeles'];
let places = ['Miami', ...cities, 'Chicago']; // ['Miami', 'San Francisco', 'Los Angeles', 'Chicago']

console.log(y);
console.log(places);


/*
Classes
Best Practice: While the syntax for creating classes in ES6 obscures how implementation and prototypes work under the hood,
it is a good feature for beginners and allows us to write cleaner code.
*/
console.log('\n')  //add space
console.log('Classes') //header


class Person {
    constructor(name, age, gender) {
        this.name   = name;
        this.age    = age;
        this.gender = gender;
    }

    incrementAge() {
      this.age += 1;
    }
}

//extned from person class
class Personal extends Person {
    constructor(name, age, gender, occupation, hobby) {
        super(name, age, gender);
        this.occupation = occupation;
        this.hobby = hobby;
    }

    incrementAge() {
        super.incrementAge();
        this.age += 20;
        console.log(this.age);
    }
}

let tobs = new Person('tobs',21,'male')
tobs.incrementAge()
console.log(tobs);


/*
Symbols
Symbols have existed prior to ES6, but now we have a public interface to using them directly. 
Symbols are immutable and unique and can be used as keys in any hash.

Symbol.for(key)
Symbol.for(key) will create a Symbol that is still immutable and unique, but can be looked up globally.
Two identical calls to Symbol.for(key) will return the same Symbol instance.
NOTE: This is not true for Symbol(description):
*/
console.log('\n')  //add space
console.log('Symbols') //header

//Symbol.for(key)
let symbX = Symbol('foo') === Symbol('foo') // false
let symbY = Symbol.for('foo') === Symbol('foo') // false
let symbZ = Symbol.for('foo') === Symbol.for('foo') // true
console.log(symbX);
console.log(symbY);
console.log(symbZ);


/*
Maps
*/
console.log('\n')  //add space
console.log('Maps') //header

let map1 = new Map();
let xMap = map1.set('name', 'david');
let yMap = map1.get('name'); // david
let zMap = map1.has('name'); // true

console.log(xMap);
console.log(yMap);
console.log(zMap);

//We can now use any type as a key, and it will not be type-cast to a string.
let map = new Map([
    ['name', 'david'],
    [true, 'false'],
    [1, 'one'],
    [{}, 'object'],
    [function () {}, 'function']
]);

for (let key of map.keys()) {
    console.log(typeof key," -- " ,key); // > string, boolean, number, object, function
}

//We can also iterate over maps using .entries():
for (let [key, value] of map.entries()) {
    console.log(key, value);
}

/*
WeakMaps
*/
console.log('\n')  //add space
console.log('WeakMaps') //header

let _age = new WeakMap();
class Person2 {
    constructor(age) {
        _age.set(this, age);
    }

    incrementAge() {
        let age = _age.get(this) + 1;
        _age.set(this, age);
        if (age > 50) {
            console.log('Midlife crisis');
        }
    }
}

//cool thing about using WeakMaps to store our private data 
//is that their keys do not give away the property names
let tobs2 = new Person2(60)
tobs2.incrementAge() // 'Midlife crisis'
let refProp = Reflect.ownKeys(tobs2); // []
console.log(refProp); 


/*
Promises
Promises allow us to turn our horizontal code (callback hell) into vertical code
To understand promises look into the file callbacks.js first

Error Handling using a bunch of nested callbacks can get chaotic. 
Using Promises, we have a clear path to bubbling errors up and handling them appropriately. 
Moreover, the value of a Promise after it has been resolved/rejected is immutable - 
it will never change.

*/
console.log('\n')  //add space
console.log('Promises') //header

const myPromise = new Promise((resolve, reject) => {  
    let condition;  
    
    if(true) {    
        resolve('Promise is resolved successfully.');  
    } else {    
        reject('Promise is rejected');  
    }
});

//logging the message to the console that we got from the Promise:
//The then() method is called after the Promise is resolved.
//with cath() method is called if the promise gets rejected
myPromise.then((message) => { 
    // console.log(message);
}).catch((message) => { 
    // console.log(message);
});
console.log("commented out log due to timeout affecting synchronicity");


/*
Generators
function*
Also talked about in app.js
*/
console.log('\n')  //add space
console.log('Generators') //header

function* sillyGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

var generator = sillyGenerator();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: 4, done: false }



/*
Async Await
async await allows us to perform the same thing we accomplished using Generators and Promises 
with less effort:
*/
console.log('\n')  //add space
console.log('Async Await') //header



/*
Getter/Setter functions
*/
console.log('\n')  //add space
console.log('Getter/Setter functions') //header

class Employee {

    constructor(name) {
        this._name = name;
    }

    get name() {
      if(this._name) {
        return 'Mr. ' + this._name.toUpperCase();  
      } else {
        return undefined;
      }  
    }

    set name(newName) {
      if (newName == this._name) {
        console.log('I already have this name.');
      } else if (newName) {
        this._name = newName;
      } else {
        return false;
      }
    }
}

var emp = new Employee("James Bond");

// uses the get method in the background
if (emp.name) {
  console.log(emp.name);  // Mr. JAMES BOND
}

// uses the setter in the background
emp.name = "Bond 007";
console.log(emp.name);  // Mr. BOND 007













