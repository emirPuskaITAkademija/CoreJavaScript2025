function sum(x, y = 10) {
    return x + y;
}

function sumiraj(...params) {
    let sum = 0;
    for (let param of params) {
        sum = sum + param;
    }
    return sum;
}

const result = sum(23);
console.log(result);
const suma = sum(23, 34);
console.log(suma);
console.log("Sumiraj ....");
const zbir = sumiraj(23, 34, 43);
console.log(zbir);
const sabirak = sumiraj(12, 23, 34, 45, 56, 67, 678);
console.log(sabirak);
const zeroArg = sumiraj();
console.log(zeroArg);

function zbiraj() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

const zbirajResult = zbiraj(1, 2, 34);
console.log("Zbiraj Result = " + zbirajResult);