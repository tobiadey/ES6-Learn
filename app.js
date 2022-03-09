
/*
BASIC JS NOTATIONS

Development, M.-N.W.D. and (n.d.). Level Up Your JavaScript Skills: 12 basic notions. 
[online] MA-NO Web Design and Development. 
Available at: https://www.ma-no.org/en/programming/javascript/level-up-your-javascript-skills-12-basic-notions 
[Accessed 7 Mar. 2022].
*/



/*
Value vs. Reference Variable Assignment‌
*/

//JavaScript always assigns variables by value when the asigned value is of assigned value is one of JavaScript’s five primitive type (i.e., Boolean, null, undefined, String, and Number) 
//However, when the assigned value is an Array, Function, or Object a reference to the object in memory is assigned.

console.log('\n')  //add space
console.log('Value vs. Reference Variable: ') //header

let var1V = 'My string';
let var2V = var1V;
var2V = 'My new string';
console.log(var1V); // 'My string'
console.log(var2V); // 'My new string'

// Now, let’s compare this with object assignment.

let var1R = { name: 'Jim' }
let var2R = var1R;
var2R.name = 'John';
console.log(var1R); // { name: 'John' }
console.log(var2R); // { name: 'John' }


/*
Closures
"Closure" is an important JavaScript pattern for accessing a variable privately. 

createGreeter returns an anonymous function with access to the greeting provided,"Hello."
SayHello will have access to this greeting for all future uses!
An anonymous Function is a function that does not have any name associated with it.
*/

console.log('\n')  //add space
console.log('Closures: ') //header

function createGreeter(greeting) {
    return function(name) {
      console.log(greeting + ', ' + name);
    }
  }
  const sayHello = createGreeter('Hello');
  sayHello('Joe'); // Hello, Joe


/*
Destructuring

Destructuring is a common way of extracting properties from objects cleanly.
*/

console.log('\n')  //add space
console.log('Destructuring: ') //header

const obj = {
    name: 'Joe',
    food: 'cake'
  }
  const { name, food } = obj;
  console.log(name, food); // 'Joe' 'cake'

//If you want to extract properties under a different name, you can specify them using the following format.

const { name: myName, food: myFood } = obj;
console.log(myName, myFood); // 'Joe' 'cake'


//Destructuring is used in the following example to pass the person object cleanly to the introduction function. 
//In other words, destructuring can (and is often) used directly to extract function parameters. 
//Like props in React
const person = {
    name: 'Eddie',
    age: 24
  }
  function introduce({ name, age }) {
    console.log(`I'm ${name} and I'm ${age} years old!`);
  }
console.log(introduce(person)); // "I'm Eddie and I'm 24 years old!"


/*
Spread Syntax

The spread operator "..." is used to remove the array from the individual elements.
*/

console.log('\n')  //add space
console.log('Spread Syntax: ') //header

const arr = [4, 6, -1, 3, 10, 4];
const max = Math.max(...arr);
console.log(max); // 10 (returns max value in array)




/*
Rest Syntax
You can use it to place in an array any number of arguments passed to a function!
*/

console.log('\n')  //add space
console.log('Rest Syntax: ') //header


function myFunc(...args) {
    console.log(args[0] + args[1]);
  }
  myFunc(1, 2, 3, 4); // 3 (adds value at inndex 0 & 1)


/*
Array Methods
*/

console.log('\n')  //add space
console.log('Array Methods:') //header

// map, filter, reduce

//map:return array where each element is transformed as specified by the function
const arrM = [1, 2, 3, 4, 5, 6];
const mapped = arrM.map(el => el + 20);
console.log(mapped); // [21, 22, 23, 24, 25, 26]

//filter:return array of elements where the function returns true
const arrF = [1, 2, 3, 4, 5, 6];
const filtered = arrF.filter(el => el === 2 || el === 4);
console.log(filtered); // [2, 4]

//reduce:accumulate values as specified in function
const arrR = [1, 2, 3, 4, 5, 6];
const reduced = arrR.reduce((total, current) => total + current);
console.log(reduced); // 21



//find, findIndex, indexOf

//find: return the first instance that matches the specified criteria. 
//Does not progress to find any other matching instances.
const arrF1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = arrF1.find(el => el > 5);
console.log(found);// 6

// findIndex: This works almost identically to find, 
// but rather than returning the first matching element 
// it returns the index of the first matching element. 
// Take the following example, which uses names instead of numbers for clarity
const arrF2 = ['Nick', 'Frank', 'Joe', 'Frank'];
const foundIndex1 = arrF2.findIndex(el => el === 'Frank');
console.log(foundIndex1);// 1

// indexOf: Works almost identically to findIndex, 
// but instead of taking a function as an argument it takes a simple value. 
// You can use this when you have simpler logic and don’t need to use a function 
// to check whether there is a match.
const arrI= ['Nick', 'Frank', 'Joe', 'Frank'];
const foundIndex2 = arrI.indexOf('Frank');
console.log(foundIndex2);// 1



// push, pop, shift, unshift

// push: This is a relatively simple method that adds an item to the end of an array. 
// It modifies the array in-place and the function itself returns the item added to the array.
let arrP = [1, 2, 3, 4];
const pushed = arrP.push(5);
console.log(arrP);// [1, 2, 3, 4, 5]
console.log(pushed);// 5

// pop: This removes the last item from an array. Again, it modifies the array in place. 
// The function itself returns the item removed from the array.
let arrP1 = [1, 2, 3, 4];
const popped = arrP1.pop();
console.log(arrP1); // [1, 2, 3]
console.log(popped); // 4

// shift: This removes the first item from an array. Again, it modifies the array in place.
// The function itself returns the item removed from the array.
let arrS = [1, 2, 3, 4];
const shifted = arrS.shift();
console.log(arrS); // [2, 3, 4]
console.log(shifted); // 1

// unshift: This adds one or more elements to the beginning of an array. 
// Again, it modifies the array in place. 
// Unlike a lot of the other methods, the function itself returns the new length of the array.
let arrUS = [1, 2, 3, 4];
const unshifted = arrUS.unshift(5, 6, 7);
console.log(arrUS);// [5, 6, 7, 1, 2, 3, 4]
console.log(unshifted);// 7


// splice, slice
//These methods either modify or return subsets of arrays.

// splice: Change the contents of an array by removing or replacing existing elements 
// and/or adding new elements. This method modifies the array in place.
let arrSP = ['a', 'c', 'd', 'e'];
//at position 1 of the array, remove 0 elements and insert b.
 arrSP.splice(1, 0, 'b') // [a,b,c,d,e]

// slice: returns a shallow copy of an array from a specified start position 
// and before a specified end position. 
// If no end position is specified, the rest of the array is returned. 
// Importantly, this method does not modify the array in place but rather returns the desired subset.
let arrSL = ['a', 'b', 'c', 'd', 'e'];
const sliced = arrSL.slice(2, 4);
console.log(sliced); // ['c', 'd']
console.log(arrSL); // ['a', 'b', 'c', 'd', 'e']


// sort
//Sorts an array based on the provided function which takes a first element and second element argument.
//Modifies the array in place. If the function returns negative or 0, the order remains unchanged.
//If positive, the element order is switched.
let arrs = [1, 7, 3, -1, 5, 7, 2];
const sorter = (firstEl, secondEl) => firstEl - secondEl;
arrs.sort(sorter);
console.log(arrs);// [-1, 1, 2, 3, 5, 7, 7]


/*
Generators- function*
*/

console.log('\n')  //add space
console.log('Generators: ') //header

function* greeter() {
    yield 'Hi';
    yield 'How are you?';
    yield 'Bye';
  }
  const greet = greeter();
  console.log(greet.next().value); // 'Hi'
  console.log(greet.next().value); // 'How are you?'
  console.log(greet.next().value); // 'Bye'
  console.log(greet.next().value); // undefined

//And using a generator for infinite values:
function* idCreator() {
    let i = 0;
    while (true)
      yield i++;
  }
  const ids = idCreator();
  console.log(ids.next().value); // 0
  console.log(ids.next().value); // 1
  console.log(ids.next().value); // 2
  // etc...


/*
Identity Operator (===) vs. Equality Operator (==)
(==) operator will perform type conversion
(===)operator will not perform any type conversion before comparing.
*/

console.log('\n')  //add space
console.log('Identity Operator (===) vs. Equality Operator (==): ') //header

console.log(0 == '0'); // true
console.log(0 === '0'); // false

/*
Object Comparison
*/

console.log('\n')  //add space
console.log('Object Comparison: ') //header

//The following objects appear equal but they are in fact pointing to different references.
const joe1 = { name: 'Joe' };
const joe2 = { name: 'Joe' };
console.log(joe1 === joe2); // false


//In contrast, the following is true because one object is equal to the other object 
//and therefore points to the same reference (only one object is in memory).
const joe11 = { name: 'Joe' };
const joe22 = joe11;
console.log(joe11 === joe22); // true



/*
Callback Functions
console.log function is being passed as a callback to myFunc. 
It gets executed when setTimeout completes. 
That’s all there is to it!
*/

console.log('\n')  //add space
console.log('Callback Functions: ') //header

function myFunc(text,callback) {
    setTimeout(function() {
        // The typeof operator allows us to check if the callback variable stores a function.
        if (typeof callback === 'function'){
            callback(text);
        }
    }, 2000);
  }
myFunc('Hello world!', console.log); // 'Hello world

/*
Promises
*/

console.log('\n')  //add space
console.log('Promises: ') //header

const myPromise = new Promise(function(res, rej) {
    setTimeout(function(){
      if (Math.random() < 0.9) {
        return res('Hooray!');
      }
      return rej('Oh no!');
    }, 1000);
  });
  myPromise
    .then(function(data) {
      console.log('Success: ' + data);
     })
     .catch(function(err) {
      console.log('Error: ' + err);
     });
     
  // If Math.random() returns less than 0.9 the following is logged:
  // "Success: Hooray!"
  // If Math.random() returns 0.9 or greater the following is logged:
  // "Error: On no!"


/*
Async Await
*/

console.log('\n')  //add space
console.log('Async Await: ') //header

const greeter2 = new Promise((res, rej) => {
    setTimeout(() => res('Hello world2!'), 2000);
  })
  async function myFunc() {
    const greeting = await greeter2;
    console.log(greeting);
  }
  myFunc(); // 'Hello world!'



// why is it that i get:
// Error
// Success: Hooray!
// Hello world2!

// the first hello world! doesnt print


