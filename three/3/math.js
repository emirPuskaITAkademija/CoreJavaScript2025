const max = Math.max(1, 2, 3);
console.log("Max = " + max);

const applyMax = Math.max.apply(Math, [1, 2, 3]);
console.log("Apply Max = " + applyMax);

const applyCall = Math.max.call(Math, 1, 2, 3);
console.log("Apply Call = " + applyCall);

const person = {
    name: "Faruk",
    surname: "Hodzic"
}

console.log(person.name);
console.log(person["name"]);

const studentScores = {
    Alice: [85, 90, 78],
    Bob: [82, 95, 88],
    Charlie: [91, 87, 89]
};

for (const student in studentScores) {
    //BEZ spread
    // const maxScore = Math.max.apply(Math, studentScores[student]);
    //[85, 90, 78]  Math.max(85, 90, 78)
    const maxScore = Math.max(...studentScores[student])
    console.log(`${student} - Najveća ocjena: ${maxScore}`);
}