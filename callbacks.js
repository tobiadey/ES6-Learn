
/*

Cem Eygi. freeCodeCamp.org. (2020). JavaScript Promise Tutorial: Resolve, Reject, and Chaining in JS and ES6. [online] 
Available at: https://www.freecodecamp.org/news/javascript-es6-promises-for-beginners-resolve-reject-and-chaining-explained/ 
[Accessed 9 Mar. 2022].

‌
Cem Eygi.freeCodeCamp.org. (2020). JavaScript Callback Functions – What are Callbacks in JS and How to Use Them. [online] 
Available at: https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/ 
[Accessed 9 Mar. 2022].

‌

*/

//The print() function takes another function as a parameter and calls it inside. 
//This is valid in JavaScript and we call it a “callback”.
//So a function that is passed to another function as a parameter is a callback function.
function print(callback) {  
    callback();
}

//the message function is an example of a callback function.
//it is being passed into setTimeout()
const message = function() {  
    console.log("This message is shown after 4 seconds");
}
 
setTimeout(message, 4000);

//Anonymous Function 
//a function definition without a name in JavaScript is called as an “anonymous function”.
//the callback function here has no name
setTimeout(function() {  
    console.log("This message is shown after 3 seconds");
}, 3000);


//arrow function
setTimeout(() => { 
    console.log("This message is shown after 3 seconds");
}, 3000);

//callback hell (hard to read) (methods are not defined so youll get error on compiling)
firstRequest(function(response) {  
    secondRequest(response, function(nextResponse) {    
        thirdRequest(nextResponse, function(finalResponse) {     
            console.log('Final response: ' + finalResponse);    
        }, failureCallback);  
    }, failureCallback);
}, failureCallback);

//using chaining, a feture of promises. (easier to read) (methods are not defined so youll get error on compiling)
firstRequest()
  .then(function(response) {
    return secondRequest(response);
}).then(function(nextResponse) {  
    return thirdRequest(nextResponse);
}).then(function(finalResponse) {  
    console.log('Final response: ' + finalResponse);
}).catch(failureCallback);