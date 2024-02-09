// 1 Sumatoria de Numeros //
let numeroUno = 15;
let numeroDos = 13;
let operacionDeNumeros = numeroDos + numeroUno;
console.log(operacionDeNumeros);

//2 Resta de Numeros //
operacionDeNumeros = numeroUno - numeroDos;
console.log(operacionDeNumeros);

//3 Mutiplicacion de numeros//
operacionDeNumeros = numeroDos * numeroUno;
console.log(operacionDeNumeros);

//4 Division de Numeros //
operacionDeNumeros = numeroDos / numeroUno;
console.log(operacionDeNumeros);

//5 Resto de la division //
operacionDeNumeros = numeroDos % numeroUno;

// 6 Incremento de numero //
numeroUno ++;
console.log(numeroUno);

// 7 Decremento de numero //
numeroUno --;
console.log(numeroUno);

// 8 Potencia de numero //
operacionDeNumeros= numeroUno **2;
console.log(operacionDeNumeros);

// 9 Redondeo de decimal //
let numeroDecimal = 3.145987;
console.log(Math.round(numeroDecimal));

// 10 Numero Aleatorio //
let max = 100;

function generarNumeroRandom(max){
    return Math.floor(Math.random() * max);
}

console.log(generarNumeroRandom(max));