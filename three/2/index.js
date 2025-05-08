//arguments, document
//call -> JS ob1 i JS ob2
// person1 i person2 i person3

const person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    home: function (city, country) {
        return city + ", " + country;
    }
};

const person2 = {
    firstName: "Faruk",
    lastName: "Hodzic"
}

const person3 = {
    firstName: "Dženita",
    lastName: "Kovačević"
}

console.log(person1.fullName());
console.log(person1.fullName.call(person2))
console.log(person1.home("Sarajevo", "BiH"));

console.log(person1.home.call(person2,"Gradačac", "BiH"));
console.log(person1.fullName.call(person3));
