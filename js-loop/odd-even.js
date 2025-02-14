// for(let i = 0 ; i <= 10 ; i++){

//     console.log(i)
// }


//  1 - 20 even number 


// for ( let i = 0 ; i <= 20 ; i= i+2 ){

//     console.log(i)
// }


// 1 - 20 ODD number 

// for ( let i = 1 ; i <= 20 ; i = i + 2 ){

//     console.log(i)

// }

const array = [1, 2, 3, 4, 5, 6, 7];


for (let i = 1; i < array.length; i++) {
    if (i == 5) {
    continue;
    }
    console.log(array[i]);
    
   }

   console.log(array.length);