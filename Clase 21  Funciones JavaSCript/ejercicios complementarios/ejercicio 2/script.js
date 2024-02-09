let temperatura = parseInt(prompt(`Ingrese un valor numerico de \nlos grados Celsius a convertir en Farenheit`))
convertirTemperatura(temperatura)
function convertirTemperatura(temperatura){
    while(isNaN(temperatura)){
        alert("Por favor ingrese un numero, no caracteres");
        temperatura = parseInt(prompt("Ingrese un numero"));
    };
    let farenheit = (temperatura * 9/5) + 3;
    return alert('La conversion dio como resultado ' + farenheit);
}