/** javaScript Array Methods 
 * --------------------------
 * javaScript Array Methods Helps to Manipulate and iterate array
 * javaScript Have Wide Variety of Array Methods
 * 
 * push(): Adds one or more elements to the end of an array.
 * 
 * pop(): Removes the last element from an array.
 * 
 * shift(): Removes the first element from an array.
 * 
 * unshift(): Adds one or more elements to the beginning of an array.
 * 
 * slice(): Extracts a section of an array and returns it as a new array.
 * 
 * indexOf(): Returns the index of the first occurrence of a value in an array.
 * 
 * lastIndexOf(): Returns the index of the last occurrence of a value in an array.
 * 
 * concat(): Combines two or more arrays into a new array.
 * 
 * filter(): Creates a new array with the elements that pass a test function.
 * 
 * map(): Creates a new array with the results of applying a function to each element of an array.
 * 
 * reduce(): Reduces an array to a single value by repeatedly applying a function to the elements.
 * 
 * More...
*/

const fruits = ['appel', 'banana', 'coconut', 'sugarcane'];

//POP: remove a last item from array
// fruits.pop()
// Shift: remove first item from array
// fruits.shift()

// can slice a par of array 
// but remember first value is always inclusive and the secund one is exclusive

// newFruits = fruits.slice(1,3)

// the first value is the starting value and it inclusive and secund value is the count that how meany data we want to slice.

newFruits = fruits.splice(1,2)



console.log(newFruits)
