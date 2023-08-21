/**
 * JavaScript Higher-order functions and callback
 * ------------------------------------
 * Higher order function:
 * Higher order functions are functions that can take other functions as arguments or return functions as their results. They enable a functional programming style and provide powerful ways to manipulate and work with function
 * 
 * Callback function:
 * A callback function on the other hand is a function that is passed as an argument to another function and it executed inside that function.
 * The callback function is called back at a certain point in the execution of the higher order function allowing for customization and extending the behavior of the higher order function.
 */

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);
// Output: [2, 4, 6, 8, 10]