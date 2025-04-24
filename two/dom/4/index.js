const poruke = [
    "Najveća snaga nije u onome što posjedujemo, već u onome što smo spremni otpustiti. - Nepoznat autor",
    "Imate moć nad svojim umom, ne nad vanjskim događajima. Shvatite ovo i naći ćete snagu. - Marko Aurelije",
    "Kad je očito da se ciljevi ne mogu postići, nemojte prilagođavati ciljeve, već prilagodite korake djelovanja. - Konfucije",
    "Obilježje je obrazovanog uma da može zabaviti misao a da je ne prihvati. - Aristotel",
    "Vrijeme ne liječi rane. Ono nas uči kako da živimo s njima. - Nepoznat autor",
    "Svjetlost koju tražiš izvana možda već nosiš u sebi. - Nepoznat autor",
    "Živite kao da ćete sutra umrijeti. Učite kao da ćete živjeti vječno. - Mahatma Gandhi",
    "Najveća slava nije nikad ne pasti, već ustati svaki put kad padneš. - Konfucije",
    "Tajna sreće ne nalazi se u traženju više, već u razvijanju sposobnosti da se manje uživa. - Sokrat",
    "Što čovjek više razmišlja o dobrim mislima, to će biti bolji njegov svijet i svijet u cjelini. - Albert Einstein",
    "Sreća je osjećaj da se snaga povećava – da se otpor savladava. - Friedrich Nietzsche",
    "Oni koji donose svjetlost u živote drugih nikad ne ostaju bez nje. - James Matthew Barrie",
    "Sudbina nije stvar slučajnosti, već stvar izbora. - William Jennings Bryan",
    "Promjena je zakon života. Oni koji gledaju samo u prošlost ili sadašnjost sigurno će propustiti budućnost. - John F. Kennedy",
    "Čovjek koji pomiče planinu započinje tako što odnosi male kamenčiće. - Konfucije",
    "Objasniti stvari jednostavno je umijeće. - Emir Puška"
];


function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onClassAChange() {
    const elements = document.querySelectorAll("div.classA");
    const indeksPoruke = generateNumber(0, 7);
    console.log("Class A indeks poruke = " + indeksPoruke);
    let i = indeksPoruke;
    let classAPoruka = poruke[i];
    for (let element of elements) {
        element.innerHTML = classAPoruka;
        i = i === 7 ? 0 : i + 1;
        classAPoruka = poruke[i];
    }
}

// 8-16
function onClassBChange() {
    const classBElements = document.querySelectorAll('p.classB');
    const indeksPoruke = generateNumber(8, 15);
    console.log("Class B indeks poruke = " + indeksPoruke);
    let i = indeksPoruke;
    let classBPoruka = poruke[i];
    for (let element of classBElements) {
        element.innerHTML = classBPoruka;
        i = i === 15 ? 8 : i + 1;
        classBPoruka = poruke[i];
    }
}

// const classBChanger = function(){
//     const classBElements = document.querySelectorAll('p.classB');
//     const indeksPoruke = generateNumber(8, 15);
//     console.log("Class B indeks poruke = " + indeksPoruke);
//     let i = indeksPoruke;
//     let classBPoruka = poruke[i];
//     for (let element of classBElements) {
//         element.innerHTML = classBPoruka;
//         i = i===15 ? 8: i+1;
//         classBPoruka = poruke[i];
//     }
// }

const classBChangeHandler = () => {
    const classBElements = document.querySelectorAll('p.classB');
    const indeksPoruke = generateNumber(8, 15);
    console.log("Class B indeks poruke = " + indeksPoruke);
    let i = indeksPoruke;
    let classBPoruka = poruke[i];
    for (let element of classBElements) {
        element.innerHTML = classBPoruka;
        i = i === 15 ? 8 : i + 1;
        classBPoruka = poruke[i];
    }
}

const sumFunction = function sum(x1, x2) {
    return x1 + x2;
}

const sumFunction2 = (x1, x2) => x1 + x2;

const noviDivElement = document.createElement("div")
noviDivElement.innerHTML="DIV dodan preko JavaScript";
noviDivElement.onclick = () =>{
    alert("Klikno si na DIV dodan preko JS koda");
};
document.body.appendChild(noviDivElement);
