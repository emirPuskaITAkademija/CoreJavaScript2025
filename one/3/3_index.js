// Numbers
let duzina = 9;
let tezina = 2.3;

//Strings
let name = "Azur";
let surname = 'Bulić';

//Booleans
let lav = true;
let condition = false;

// Nizove
const vocke = [23, "Banana", "Kiwi", "Krompir"];

// Objekat
const person = {
  firstName: "Jovan",
  lastName: "Carević",
  age: 23
};

const posebniDatum = new Date("2020-01-01");

function sum(number1, number2){
    return number1 + number2;
}

const result = sum(23, "34");
const result2 = sum(23, 34);
console.log('Result %s', result);
console.log('Result %s', result2);