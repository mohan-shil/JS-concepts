const numbers = [12, 13, 14, 15, 88, 99, 100];

// index is the position of an element in an array
// index always starts from 0

// array starts from 0 index so number 12 is in 0 index then 13 is in 1 index and so on...

/*

console.log(numbers); // [ 12, 13, 14, 15, 88, 99, 100 ]
console.log(numbers[0]); // 12
console.log(numbers[1]); // 13
console.log(numbers[2]); // 14
console.log(numbers[3]); // 15
console.log(numbers[4]); // 88

*/

//get element value by index

const fourth = numbers[3];  // 15
//console.log(fourth);    // 15

//set or update element value by index

numbers[0] = 'One index updated';
numbers[1] = 'Two index updated';

console.log(numbers);