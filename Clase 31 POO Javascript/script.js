
//EJERCICIO 1

// Definir la clase "Persona"
// class Persona {
//     constructor(nombre, edad, ciudad, profesion) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.ciudad = ciudad;
//         this.profesion = profesion;
//     }
//     saludar() {
//         document.write(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad}
//         años. Vivo en ${this.ciudad} y mi profesion es ${this.profesion}`);
//     }
// }
//     // Crear una instancia de la clase "Persona"
//     const persona1 = new Persona("Juan", 30, "Buenos Aires", "doctor");
//     // Llamar al método "saludar" de la instancia
//     persona1.saludar();

//EJERCICIO 2
/*class Libro{
    constructor(titulo, autor, añoDeProduccion, genero){
        this.titulo=titulo;
        this.autor=autor;
        this.añoDeProduccion=añoDeProduccion;
        this.genero=genero;
    }
    informacion(){
        document.write(`El libro ${this.titulo}, del autor ${this.autor}, del año ${this.añoDeProduccion} y del genero ${this.genero}.`)
    }
}

const libro1 = new Libro("Harry Potter", "J.K.Rowling", "2000", "fantastico");
libro1.informacion();*/

//Desafio GETTER Y SETTER

class Circulo {
    constructor(radio) {
        this._radio = radio;
    }

    get radio() {
        return this._radio;
    }

    set radio(nuevoRadio) {
        if (nuevoRadio > 0) {
            this._radio = nuevoRadio;
        } else {
            console.error("ERROR");
        }
    }

    get area() {
        return 3.14 * (this._radio * this._radio);
    }

    get circunferencia() {
        return 2 * 3.14 * this._radio;
    }
}

const circulo1 = new Circulo(15);

console.log("Radio:", circulo1.radio);
console.log("Área:", circulo1.area);
console.log("Circunferencia:", circulo1.circunferencia);

