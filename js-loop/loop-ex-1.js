// give me the list of numbers between 1 to 30 divisible by 5 


// for ( let i = 1 ; i <= 100 ; i++){
    
//     if( i %5 === 0 && i %3 === 0 ){
        
//         console.log(`The number is: ${i}`)
//     }
// }

// give me the sum of numbers that are divisible by 3 between 1-20 

let sum = 0;

for( i = 1 ; i <= 20 ; i++){

    if( i %3 === 0 ){

     sum = sum + i ;

    }
}


console.log ('The sum of the numbers is :' , sum )