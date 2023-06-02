let a = 5;
let b = 10;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("a:", a); // Output: 10
console.log("b:", b); // Output: 5
