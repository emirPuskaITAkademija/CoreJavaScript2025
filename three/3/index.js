//apply()


const person1 = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + " iz " + city + ", " + country;
    }
}

const person2 = {
    firstName: "Dženita",
    lastName: "Kovačević"
}

const person3 = {
    firstName: "Tarik",
    lastName: "Bulić"
}

console.log(person1.fullName.apply(person2, ["Gradačac", "BiH"]));