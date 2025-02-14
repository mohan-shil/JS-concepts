/**
 * 
 * 
 * Looping Technique
 * 
 *  1. for loop 
 *  2. while loop 
 *  3. do while --> ignore 
 *  4. for of  --> array loop korar jonno 
 *  5. for in --> object loop korar jonno
 * 
 * 
 */


// For of loop using a array 

const friends = [ 'elon', 'bill', 'warren ', 'jodu ', 'modhu', 'jogai', 'halum']   // array 

for ( const friend of friends ){   // for of loop 

    // console.log(friend)   
}



// for looop   

// for ( let i = 0 ; i < friends.length; i++ ){

//     console.log(i)
//     console.log(friends[i])
// }

// while loop 

// let i = 0;

// while ( i < friends.length){
//     console.log(friends[i])
//     i++
// }


// const friendss = [];

// for( let i = 0; i < friends.length; i++ ){
//     // console.log(friends[i])

//     const friend = friends[i];

//         console.log(friend)
//     friendss.push(friend)
// }

//     console.log(friendss)



const rev_frnd = [];

for(i = friends.length -1; i >= 0 ; i--){
    const frnd = friends[i];

    console.log(frnd);

    // rev_frnd.push(frnd);
    rev_frnd.unshift(frnd); 
}

console.log(rev_frnd);


// .push is sequentic pushed to the array --> [1,2,3,4, ...]
// .unshift is reversely sequentic pushed to the array --> [3,2,1, ...]







