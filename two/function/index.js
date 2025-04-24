/*
  JavaScript funkcija : blok koda koji je odgovoran za izvršavanje
  nekih linija koda.
  <p>Kad se izvršava ?
  Odgovor: kad je pozovemo
 */

function sum(num1, num2){
    const result = num1 + num2;
    console.log("Result " + result);
}

sum(23, 34);
sum(345, 123);
sum('Dino ', 'Merlin');

function multiply(a, b){
    return a * b;
}

const result = multiply(12, 12);
console.log("Produkt = " + result);