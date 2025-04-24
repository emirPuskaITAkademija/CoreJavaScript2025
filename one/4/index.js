//Object literal
const person = {
    name: "Dženita",
    surname: 'Kovačević',
    age: 23,
    eyeColor: 'blue',
    fullName: function(){
        return this.name +" "+ this.surname;
    },
    anotherFullName: this.name +  this.surname//ne može
}
console.log("Full Name: %s", person.fullName());
console.log("Another Full Name: %s", person.anotherFullName);
person.gender='Female';
console.log(person);
const personEyeColor = person.eyeColor;
console.log(personEyeColor);
const eyeColorOfPerson = person["eyeColor"];
console.log(eyeColorOfPerson);

const animal = {};
animal.name='Lesi';
animal.surname = 'Kući';
console.log(animal);


const avion = new Object();
avion.name='Boeing 707';
console.log(avion);
delete avion.name;
console.log(avion);


const persona = {
    name: "Jovan",
    surname: 'Carević',
    age: 30,
    cars: {
        car1: 'Porsche',
        car2: 'BMW',
        car3: 'Mercedes'
    },
    fullName: function (){
        return (this.name + " " + this.surname).toUpperCase();
    }
}

console.log(persona);
console.log(persona.cars.car1);
console.log(persona["cars"]["car2"]);
console.log(persona.fullName());
console.log("------------------");

for(let attributeName in persona){
    const attributeValue = persona[attributeName];
    console.log(attributeName+" -> " + attributeValue);
}

console.log("----");
const vocke = {
    name: "Banana",
    color: 'žuta',
    count: 23
}
for(let [attributeName, attributeValue] of Object.entries(vocke)){
    console.log(attributeName+" -> " + attributeValue);
}