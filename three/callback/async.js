/**
 * Završiću kasnije..
 *
 * Asinhrone funkcije se izvršavaju paralelno
 *
 * callback -> se obično koriste u sprezi sa asinhronim funkcijama
 */


function print(something){
    console.log(something);
}

function printout(something){
    console.log("Something is " + something)
}

function sum(num1, num2, callback){
    let sum = num1 + num2;
    callback(sum);
}

sum(23, 34, print);
// sum(23, 34, print());
sum(23, 34, printout);