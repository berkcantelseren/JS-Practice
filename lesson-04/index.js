// Shortcuts for If-Statements

/*
1- Ternary Operator ? : 

 let result;

if (condition) {
  result = 'truthy';
} else {
  result = 'falsy'
}

2- Guard Operator &&

if (condition) {
  console.log('hello')
}

3- Default Operator

let currency;

if (!condition) {
  currency = 'USD';
}

*/

// Ternary Operator
const result = 0 ? "truthy" : "falsy";
console.log(result);

false && console.log("hello");

const message = 5 && "hello";
console.log(message);

// Default Operator
const currency = undefined || "USD";
console.log(currency);
