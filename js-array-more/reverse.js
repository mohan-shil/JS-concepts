const numbers = [1,2,3,4,5,6,7,8,9,10]

// console.log(numbers);

// numbers.reverse();
// console.log(numbers)


// const reversed = numbers.reverse();

// console.log(reversed);

const rev_numbers = [];


// for of looooop 


for( const num of numbers){
    // // console.log(num);
    // rev_numbers.push(num);   push numbers on a sequentic way 1,2,3,...
    // rev_numbers.unshift(num);   // pushes numbers on a reverse way 3,2,1...
}

// console.log(rev_numbers);


//for loop 

const for_rev = [];


for ( let i = 0; i < numbers.length; i++){
    
    const num = numbers[i];
    console.log(num)

    // for_rev.push(num);
    for_rev.unshift(num);
}

console.log(for_rev);