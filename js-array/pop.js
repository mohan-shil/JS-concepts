const friends = ['Mike', 'Stacy', 'Andy', 'Rick'];

friends.push('balam'); // added balam on the end of the array
//console.log(friends); // ['Mike', 'Stacy', 'Andy']

// To remove an element or value we will use pop() method

friends.pop('balam'); // remove last element from the array
console.log(friends); // ['Mike', 'Stacy', 'Andy']

// also we can use shift() method to remove first element from the array
// and unshift() method to add element at the beginning of the array

friends.shift(); // remove first element from the array
console.log(friends); // ['Stacy', 'Andy']

friends.unshift('Mike'); // add element at the beginning of the array
console.log(friends); // ['Mike', 'Stacy', 'Andy']


// Note: pop() and push() methods are faster than shift() and unshift() methods