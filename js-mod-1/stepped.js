/**
 * MULTI_LEVEL CONDITION    
 */


// ------------------------       ----------------------------


// const price = 3000;

// if (price >= 5000){
//     // 10% discount
//     const discount = price * 0.10; // 10/100 = 0.10
//     const payAmount = price - discount;
//     console.log(payAmount)
// }
// else if (price >= 2500){       
//     // 5% discount
//     const discount = price * 0.05; // 5/100 = 0.05
//     const payAmount = price - discount;
//     console.log(payAmount)
// } 


// else {
//     console.log(price);
// }


// ------------------------  age difining      ----------------------------

// const age = 17;

// if (age >= 18){
//     console.log('You are adult');
// }

// else if (age >= 13){
//     console.log('You are teenager');
// }

// else {  
//     console.log('You are kid');
// }   


// ------------------------   resturant     ----------------------------


const age = 52;
const price = 500;

 if (age <= 12 ){
    console.log('You can eat free');
 }

 else if (age >= 60){
    // 50% discount 
    const discount = price * 0.50; // 50/100 = 0.50
    const payAmount = price - discount;
    console.log(payAmount);
 }

 else if ( age >= 40){
    // 20% discount
    const discount = price * 0.20; // 20/100 = 0.20
    const payAmount = price - discount;
    console.log(payAmount);
 }

 else {
    console.log(price);
 }