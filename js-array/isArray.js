const friends = ['Mike', 'Stacy', 'Andy', 'Rick'];

const nums = [];

const foods = 'apple';

console.log(Array.isArray(friends)); // true
console.log(Array.isArray(nums)); // true
console.log(Array.isArray(foods)); // false


// Array.isArray() method is used to determine whether the passed value is an array or not. It returns true if the value is an array, otherwise false. It is more reliable than instanceof operator because it works through iframes.
