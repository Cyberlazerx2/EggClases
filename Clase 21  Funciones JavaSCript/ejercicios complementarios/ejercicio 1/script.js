let numero = parseInt(prompt("Ingrese un numero"));
esPrimo(numero);
function esPrimo(numero){
    while(isNaN(numero)){
        alert("Por favor ingrese un numero, no caracteres");
        numero = parseInt(prompt("Ingrese un numero"));
    };

    let resultado = numero % 2;
    if(resultado != 0){
        alert("El numero que ingreso es Primo")
    }else{
        alert("El numero que ingreso no es primo")
    }
}