let numero = parseInt(prompt(`Ingrese un valor numerico para \niniciar la secuencia`))
generarSecuencia(numero)
function generarSecuencia(numero){
    while(isNaN(numero)){
        alert("Por favor ingrese un numero, no caracteres");
        numero = parseInt(prompt("Ingrese un numero"));
    };
    for( let i= 1; i <= numero; i++ ){
        console.log(i)
    }
}