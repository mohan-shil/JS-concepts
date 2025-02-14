const friends = ['Mango', 'Poly', 'Ajax', 'Chelsy'];


//console.log(friends.includes('Poly')); // true
//console.log(friends.includes('Monkong')); // false

if (friends.includes('Poly')) {
    console.log('Poly is here');
}

else {
    console.log('Poly is not here');
}

// includes() method is case sensitive so you have to be careful while using it..