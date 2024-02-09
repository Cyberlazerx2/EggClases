class Calculadora{
    constructor(operador, num1, num2){
        this.operador = operador;
        this.num1 = num1;
        this.num2 = num2;
    }
    Operar(){
        this.operador = prompt('Ingrese un operador (suma, resta, multiplicación, división, potencia, raíz cuadrada, raíz cúbica)');
        switch (this.operador) {
            case "suma":
                
                this.num1 = parseInt(prompt('Ingrese el primer número'));
                this.num2 = parseInt(prompt('Ingrese el segundo número'));
                return this.num1 + this.num2;
            case "resta":
                this.num1 = parseInt(prompt('Ingrese el primer número'));
                this.num2 = parseInt(prompt('Ingrese el segundo número'));
                return this.num1 - this.num2;
            case "multiplicación":
                this.num1 = parseInt(prompt('Ingrese el primer número'));
                this.num2 = parseInt(prompt('Ingrese el segundo número'));
                return this.num1 * this.num2;
            case "división":
                this.num1 = parseInt(prompt('Ingrese el primer número'));
                this.num2 = parseInt(prompt('Ingrese el segundo número'));
                return this.num1 / this.num2;
            case "potencia":
                this.num1 = parseInt(prompt('Ingrese la base'));
                this.num2 = parseInt(prompt('Ingrese el exponente'));
                return this.num1 ** this.num2;
            case "raíz cuadrada":
                this.num1 = parseInt(prompt('Ingrese un número'));
                return Math.sqrt(this.num1);
            case "raíz cúbica":
                this.num1 = parseInt(prompt('Ingrese un número'));
                return Math.cbrt(this.num1);
            default:
                alert('Error ¡El operador ingresado no existe!');
                break;
        }
    }
}


const calculadora = new Calculadora();
const resultado = calculadora.Operar();
alert(resultado);