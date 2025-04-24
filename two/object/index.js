const person = {
    name: 'Tarik',
    surname: 'Fejzić',
    age: 23,
    fullName: function () {
        return this.name + " " + this.surname;
    }
}

person.eyeColor = 'Brown';
console.log(person.fullName());
console.log(person);

const dog = new Object();
dog.firstName = 'Lesi';
dog.age = 13;
console.log(dog);

console.log(dog.firstName);
console.log(dog["firstName"]);

for (let attribute in dog) {
    const attributeValue = dog[attribute];
    console.log(" -> " + attribute);
    console.log("-> " + attributeValue);
}

/** tzv constructor funkcije **/
function Person(first, last, age, eyeColor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyeColor;
}


Person.prototype.nationality = "German";
const mother = new Person("Christine", "Jovanović", 65, 'green');
console.log(mother.firstName + "  " + mother.lastName);
mother.salary = 4000;
console.log(mother);
console.log(mother.nationality);
const father = new Person("Jovan", "Carević", 69, 'blue');
console.log(father);
console.log(father.nationality)
const child = new Person("Antonio", "Banderas", 34, 'brown');
console.log(child);
console.log(child.nationality);