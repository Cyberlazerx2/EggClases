// //Utilizando el método pop() y shift(), crear un array de más de 2 elementos y aplicar primero el método pop() y luego el método shift().

// En la pantalla deberás mostrar cómo está formado el array original, qué elemento sacaste y cómo quedó el array final.

// Así:

// Mi array original es: 10,20,30,40,50

// El elemento que sacamos es: 50

// Mi array final es: 10,20,30,40

let array = [10,20,30,40,50]

document.write(`Array Original es <b>${array}</b> <br>` );

const ultimoElemento = array.pop();

document.write(`El elemento que se elimino es <b>${ultimoElemento}</b> <br>`)

document.write(`El Array Final es <b>${array}</b> <br>` );

const primerElemento = array.shift();

document.write(`El elemento que se elimino es <b>${primerElemento}</b> <br>`)

document.write(`El Array Final es <b>${array}</b> <br>` );