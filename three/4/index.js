// call(), apply() -> bind()
/**
 * sa bind() jedan objekat npr. person2 može posuditi method od person1
 */

const person1 = {
    name: "Dženita",
    surname: "Kovačević",
    fullName: function () {
        return this.name + " " + this.surname;
    }
}

const person2 = {
    name: "Tarik",
    surname: "Fejzić"
}

let punoIme = person1.fullName.bind(person2);

const imePuno = punoIme();
const imePuno2 = person1.fullName();
console.log(imePuno);
console.log(imePuno2);