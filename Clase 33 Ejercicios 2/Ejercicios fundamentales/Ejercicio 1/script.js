// Array de números
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// Parte 1:
let primerosTres = numeros.slice(0,3);
document.write(`<h1>${primerosTres}<h1/>`);
// Crea una nueva variable llamada "primerosTres" que contenga los tres primeros elementos del array "numeros".
// Luego, muestra "primerosTres" en la consola.


// Parte 2:
// Crea una nueva variable llamada "ultimosCuatro" que contenga los cuatro últimos elementos del array "numeros".
// Luego, muestra "ultimosCuatro" en la consola.
let ultimosCuatro = numeros.slice(numeros.length-4,numeros.length);
document.write(`<h1>${ultimosCuatro}<h1/>`);

// Parte 3:
// Crea una nueva variable llamada "segmentoCentral" que contenga los elementos desde el índice 3 hasta el índice 7 (ambos inclusive) del array "numeros".
// Luego, muestra "segmentoCentral" en la consola.
const segmentoCentral = numeros.slice(3,7);
document.write(`<h1>${segmentoCentral}<h1/>`);
// Parte 4:
// Crea una nueva variable llamada "segmentoSaltado" que contenga cada segundo elemento del array "numeros", empezando desde el segundo elemento.
// Luego, muestra "segmentoSaltado" en la consola.
const segmentoSaltado = numeros.slice(1, numeros.length).filter((element, index) => index % 2 == 0 )
document.write(`<h1>${segmentoSaltado}<h1/>`);
// Parte 5:
// Crea una nueva variable llamada "arrayOriginal" que contenga una copia exacta del array "numeros" utilizando "slice()".
// Luego, modifica el valor de uno de los elementos en "arrayOriginal" y muestra ambos arrays ("numeros" y "arrayOriginal") en la consola para verificar que el cambio solo se refleja en "arrayOriginal".

const arrayOriginal = numeros.slice(0,numeros.length);
arrayOriginal[2] = 40

document.write(`
<h1>Array original ${arrayOriginal}<h1/>
<h1>Array numeros ${numeros}
`);