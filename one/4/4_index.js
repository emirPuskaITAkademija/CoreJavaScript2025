function convert(){
    const inputHtmlElement = document.getElementById('input');
    const value = inputHtmlElement.value;
    const result = convertToFarenheit(value);
    const paragraphElement = document.getElementById('farenheit');
    paragraphElement.innerHTML="Temperatura u Farenheit  " + result;
}

function convertToFarenheit(param){
    let result = param * (9/5) + 32;
    return result;
}
// farenheit = celsius*(9/5)+32
// farenheit -32 =celsius * (9/5)
// 5*(farenheit - 32) = celsius * 9
// (5/9) * (farenheit-32) = celsius

function  convertToCelsius(param){
    return (5/9) * (param-32);
}