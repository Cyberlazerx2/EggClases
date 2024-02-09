const nombreDeUsuario = prompt("Por favor diga su nombre de usuario:");
let edadDeUsuario = prompt("Por favor ingrese su edad:");
const numeroAleaotrio = 10;

let saludo = "Hola usuario " + nombreDeUsuario;

//Cuando hay un signo '+' al inicio de un caracter, lo transforma en numero//
let nuevaEdad = numeroAleaotrio + +edadDeUsuario;

let multiplicacionDeEdad = edadDeUsuario * numeroAleaotrio;

console.log(saludo + " " + nuevaEdad + " " + multiplicacionDeEdad);