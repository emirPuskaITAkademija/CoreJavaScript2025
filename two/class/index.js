//2015 ili 2016 -> ES6 uvodi ključnu riječ class
class Table{
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    area(){
        const area = this.width*this.length;
        return area;
    }
}

const table1 = new Table(30, 15);
const table2 = new Table(50, 30);

console.log(table1.area());
console.log(table2.area());