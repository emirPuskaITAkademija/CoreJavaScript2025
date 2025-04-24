class Person{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    fullName(){
        return this.name + this.surname;
    }
}

class Student extends Person{
    constructor(name, surname, indexNumber) {
        super(name, surname);
        this.indexNumber = indexNumber;
    }

    fullName() {
        return super.fullName() + " " + this.indexNumber;
    }
}

class Penzioner extends Person{
    constructor(name, surname, pension) {
        super(name, surname);
        this._pension = pension;
    }

    get pension(){
        return this._pension;
    }

    set pension(newPension){
        this._pension = newPension;
    }

    static hello(pensioner){
        return pensioner.name + " kaže hello ";
    }
}

const pensioner = new Penzioner("Emir", "Puška", 2000);
console.log(pensioner.pension);
console.log(pensioner.pension);
console.log(Penzioner.hello(pensioner));