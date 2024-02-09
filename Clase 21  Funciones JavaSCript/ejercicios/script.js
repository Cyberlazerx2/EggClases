// function saludar(nombre) {
//     console.log(`¡Hola ${nombre}!`);
// }

// saludar("Salvador");

// //Ejercicio 1
// let resultado;
// function calculadora(num1, num2, operacion) {
//     if (operacion === "+") {
//         resultado = num1 + num2;
//         return resultado;
//     } else if (operacion === "-") {
//         resultado = num1 - num2;
//         return resultado;
//     } else if(operacion === "*"){
//         resultado = num1 * num2;
//         return resultado;
//     } else if(operacion === "/"){
//         resultado = num1 / num2;
//         return resultado;
//     } else{
//         console.log("Ingrese un operador válido");
//     }
// }
// calculadora(2, 2, "/");
// console.log(`El resultado de la operación es: ${resultado}`);

// function contarCaracteres(string){
//     let contar = string.length;
//     return contar
// }
// contarCaracteres("Hola");
// console.log("La Cantidad de Caracteres que contiene es: " + contarCaracteres);

// //Ejercicio 3
// let pares;
// function numerosPares(entero) {
//     for (let i = 0; i < entero; i++) {
//         if(i % 2 === 0){
//             pares = i;
//             console.log(pares);
//         }
//     }
// }
// numerosPares(10);

// //Ejercicio 4 
// function factorialIterativo(numero) {
//     let resultado = 1;
//     for (let i = 2; i <= numero; i++) {
//       resultado *= i;
//     }
//     return resultado;
// }
  
  
// let numero = prompt("ingrese un nro entero: ");
// let fx = factorialIterativo(numero);
// console.log(`El factorial de ${numero} es ${fx}`);

// //Ejercicio 5
// function esPalindromo(cadena) {
//     cadena = cadena.replace(/ /g, '').toLowerCase();
//     const cadenaInvertida = cadena.split('').reverse().join('');
//     return cadena === cadenaInvertida;
// }
// let frase = prompt("Ingrese una palabra o frase: ");

// if (esPalindromo(frase)) {
//     console.log(`${frase} es un palíndromo.`);
// } else {
//     console.log(`${frase} no es un palíndromo.`);
// }

