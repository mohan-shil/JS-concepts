/**
 * TERNARY OPERATOR (CONDITIONAL OPERATOR)
 *   have three parts 
 */

const age = 19;

// ----------- NORMAL WAY ------------
// if (age >= 18) {
//     console.log('You are adult');
// }
// else {  
//     console.log('You are kid');
// }

// ----------- TERNARY WAY (NORMAL ) ------------

// age >= 18 ? console.log('You are adult') : console.log('You are kid');

// ----------- TERNARY WAY (Simple example  ) ------------

let price = 500;
const isLeader = true ;

// if (isLeader === true) {
//     price = 0;
// }

// else {
//     price = price + 100;
// }

// console.log(price);

price = isLeader === true ? 0 : price + 100;    // ? = if , : = else


// ----------- TERNARY WAY (semi-advance  EXAMPLE) ------------

if ( isLeader === true){
    if (price > 1000){
        price = price /2;
    }
    else {
        price = 0;
    }
}

else {
    price = price + 1000;
}

// price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;

    price = isLeader === true ? 
        price > 1000 ?  
            price / 2 : 0 
                : price + 1000;



                // ektu tough hocce aste aste but i will not give up 
                