class Forma{
    constructor(nombre, lados){
        this.nombre = nombre;
        this.lados = lados;
    }
    obtenerInfo(){
        return `El nombre de la forma es ${this.nombre} y tiene ${this.lados} lados`;
    }
    totalLados(matrizDeFormas){
        var suma = matrizDeFormas.reduce(function(acumulador, elemento) {
            return acumulador + elemento;
          });
        return suma;
    }
}
class Circulo{
    constructor(nombre, radio){
        this.nombre = nombre;
        this.radio = radio
    }
    getInfo(){
        return `Círculo - Lados: ${0}`
    }
}
class Triangulo{
    constructor(nombre, lados){
        this.nombre = nombre;
        this.lados = lados;
    }
    getInfo(){
        return `Triángulo - Lados: ${this.lados}`
    }
}
const circulo = new Circulo("Círculo", 5);
const triangulo = new Triangulo("Triángulo", 3);


console.log(circulo.getInfo());
console.log(triangulo.getInfo());

const forma = [circulo, triangulo];
console.log(forma.totalLados(forma));
