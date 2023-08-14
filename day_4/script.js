/** javaScript Functions 
 * ---------------------
 * mainly there are 2 types of functions in javascript
 * 1. normal functions
 * 2. arrow functions
*/

/** Normal Function */
function greet() {
    return "Hey How Are You!";
}

var greet = greet();
console.log(greet);

/** Arrow function
 *  NOTE:: now in case of using arrow function you have to remember
 *  in arrow function (this) doesn't work like normal function
 *  in case of arrow function (this) keyword always represents the object that defined the arrow function but in case of regular/normal function
 * (this) keyword represented the object that called the function
 */

newGreet = () => {
    return "Greeting from arrow function";
}

var newGreet = newGreet();

anotherGreet = () => "Hello there";

// we can pass the permitter here in the brackets like regular function

anotherGreet = (x, y) => {
    return x + y;
};
