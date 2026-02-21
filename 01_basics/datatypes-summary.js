// Primitive

// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

console.log(id === anotherId);

const bigNumber = 3456543576654356754n

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "hitesh",
    age : 22,
}
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

console.log(typeof outsideTemp);

console.log(typeof scoreValue);

console.log(typeof myFunction);

console.log(typeof heros);

console.log(typeof anotherId);

console.log(typeof id);
// Reference (Non primitive)

// Array, Objects, Functions