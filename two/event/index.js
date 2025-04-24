/**
 * HTML eventi postoje.
 * Šta je jedan HTML event ?
 *
 * <p> ODGOVOR: nešto što se može desiti nekom html elementu, a na to nešto
 * JavaScript može reagovati.
 * Npr.
 * <li>1. HTML fajl je učitan u pretraživaču
 * <li>2. HTML input je doživio izmjenu tako što korisnik unosi vrijednost
 * <li>3. HTML button je kliknut
 *
 * <p>
 *     Lista osnovnih evenata:
 *     <li>1. onchange  - na HTML elementu se desila neka izmjena
 *     <li>2. onclick - korisnik odnosno ja kliknem na HTML element
 *     <li>3. onmouseover - korisnik pređe mišem preko tog HTML elementa
 *     <li>4. onmouseout - korisnik nije na specifičnom HTML elementu
 *     <li>5. onload - pretraživač(Mozzila, Edge, Chrome) su završili sa učitavanjem stranice
 *
 */

function onButtonClick(){
    const paragraphElement = document.getElementById("vrijemeP");
    const trenutnoVrijeme = new Date();
    paragraphElement.innerHTML=trenutnoVrijeme;
}