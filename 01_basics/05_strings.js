const name = "Abhishek"
const repoCount = 50

// console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Abhishek')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));

console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)

console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Abhishek   "

console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://abhi.com/abhi%2030"

console.log(url.replace('%2030', '-'))

console.log(url.includes('abhi'))

console.log(gameName.split('-'));