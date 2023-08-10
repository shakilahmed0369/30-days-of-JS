/**
 * TOPIC: javaScript Variables var, let, const
 *
 * Notes:
 *  var: var works ast global scoop that's mean it can be
 *  accessible and changeable from any ware
 *
 *  let: let works at block scoop that's mean it cant be
 *  accessible form out side the scoop. variables value
 *  can be change but you can't redeclare the variable.
 *
 *  const: cost is basically same as let the ony difference
 * is you can't change the value of const but in case of object
 * array you can update the elements of the array but can't reassign
 * the object/array agin
 */

// Var

if (true) {
  var varVariable = "this is coming from a var";
}

console.log(varVariable); // will work ✅

// Let

if (true) {
  let letVariable = "this is coming from a let";
  // let letVariable = 'declared same variable again' // will not work ❌
  letVariable = "this is the updated value";
  console.log(letVariable); // will work ✅
}

// console.log(letVariable); // will not work out side of scoop ❌

// Const
if (true) {
  const constVariable = "this is coming from const variable";

  // const constVariable = 'something'; // will not work ❌
  // constVariable = 'new value for const' // will not work ❌
  console.log(constVariable); // will work ✅

  const constObject = {
    name: "Akihito",
    age: "22",
  };

  console.log(constObject); // will work ✅
  constObject.name = "miamura"; // object/array can update but not reassign newly ❌
  console.log(constObject); // will work ✅
  
  //    const constObject = {
  //     name: 'Test user',
  //     age: '20'
  // }; will not work can't be assign new object ❌
}

// console.log(constVariable); // will not work ❌
