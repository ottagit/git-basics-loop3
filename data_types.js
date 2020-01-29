// Scope bindings: var, let, const
console.log('Understanding var')
var name; // variable declaration
name = 'Chris Otta'; // variable assignment of type 'String'
console.log(name);
var name = 'Fleria Kate';
console.log(name);

console.log('Understanding let')
let fruit = 'Mango';
console.log(fruit);
fruit = 'Pineapple';
console.log(fruit);
// Expect an exception to be thrown
//let fruit = 'Pawpaw';
//console.log(fruit);

// Const in action
const PI = 3.142;
console.log(PI);
// Error or warning upon reassignment of a constant
//PI = 12.32;
//console.log(PI);
