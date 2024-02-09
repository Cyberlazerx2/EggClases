alert("1: for \n 2: While \n 3: if \n Presione cualquier tecla para salir del programa");
let estructura = parseInt(prompt("Elige con que tipo de estructura desea resolver su eje: "));
let numeros = 0;
let suma = 0;
let promedio = 0;
do {
    switch (estructura) {
        case 1:
            numeros = parseInt(prompt("Ingrese la cantidad de numeros que desee:"));
            suma = 0;
            for (let i = 1; i <= numeros; i++) {
                let numeroIngresado = parseInt(prompt("Ingrese el numero " + i + " de " + numeros));
                suma += numeroIngresado;
                console.log(suma);
            }
            break;

        case 2:
            numeros = parseInt(prompt("Ingrese la cantidad de numeros que desee:"));
            suma = 0;
            contador = 1
            while (contador <= numeros) {
                let numeroIngresado = parseInt(prompt("Ingrese el numero " + contador + " de " + numeros));
                suma += numeroIngresado;
                contador++;
            };
            break;
        case 3:
            numeros = parseInt(prompt("Ingrese la cantidad de numeros que desee:"));
            if (numeros > 0) {
                for (let i = 1; i <= numeros; i++) {
                    let numeroIngresado = parseInt(prompt("Ingrese el numero " + i + " de " + numeros));
                    suma += numeroIngresado;
                    console.log(suma);
                }
            } else {
                alert("Ingrese un numero mayor a 0");
            };
            break;
        default:
            alert("Gracias por utilizar");
            break;

    };

} while (estructura <= 0 && estructura >= 4)
if (suma > 0) {
    promedio = suma / numeros;
    alert("El promedio de los numeros es " + promedio);

}