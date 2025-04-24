function generateNumber() {
    return Math.floor(Math.random() * 4); // Broj između 0 i 3
}



function changeParagraphContent(){
    // 4 elementa odnosno znam da u documentu imam 4 paragrafa
    const elements = document.getElementsByTagName("p");
    //želim kad god se pozove ova funkcija da po slučajnom odabiru uzmem jedan od četiri
    //Oni su indeksirani od 0 do 3
    const rednimBrojParagrafa = generateNumber();
    console.log("Mijenjam " + rednimBrojParagrafa+" paragraf");
    elements[rednimBrojParagrafa].innerHTML = "Početi je lako, ali istrajati nije. Istrajnost je vrlina";
}

export { generateNumber };