
class Forma{
    constructor(nombre, lados){
        this.nombre=nombre;
        this.lados=lados;
    }
    obtenerInfo(){
        return `La figura geometrica es ${this.nombre}, y tiene ${this.lados} lados`
    }
    totallados(matrizDeForma){
        var suma = [];
        for (let i = 0; i < matrizDeForma.length; i++) {
            suma.push(matrizDeForma[i].lados)
            
        }
    }
}
class Circulo {
    constructor(nombre,radio,lados){
        this.radio=radio;
        this.lados=0;
    }
    getInfo(){
        return `Circulo, Lados: ${this.lados}`
    }
}   
class Triangulo{
    constructor(longitud, lados){
        this.longitud=longitud;
        this.lados=lados;

    }
    getInfo(){
        return `triangulo, Lados: ${this.lados}`
    }
}