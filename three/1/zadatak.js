/**
 * Zadatak: Pronađi maksimalan broj odnosno definiraj funkciju
 * koja može primiti promjenljiv broj parametara.
 *
 * JavaScript ima built-in objekat koji arguments.
 *
 * Napisati funkciju kojoj ću proslijediti proizvoljan set brojeva
 * i ona će pronaći max value.
 *
 * funkcija se zove pronađiNajveciBroj()..
 * <li>1. varargs
 * <li>2. arguments
 */

function findMaxVargs(...params){
    let max = -1;
    for(let param of params){
        if(param>max){
            max = param;
        }
    }
    return max;
}

function findMaxArgs(){
    let max = -1;
    if(arguments.length == 0){
        return max;
    }
    for(let i = 0; i<arguments.length; i++){
        const num = arguments[i];
        if(num>max){
            max = num;
        }
    }
    return max;
}

const max = findMaxVargs(1000, 2, 3, 112313, 2222222, 3);
const max2 = findMaxArgs(1000, 2, 3, 112313, 2222222, 3);

console.log("Najveći od proslijeđenih je = " + max);
console.log("Najveći od proslijeđenih je = " + max2);



