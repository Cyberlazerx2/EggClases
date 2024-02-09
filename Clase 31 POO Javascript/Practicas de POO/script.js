class Celular {
    constructor(color, peso, rdp, rdc, ram, encendido, cantidadCamara){
        this.color=color;
        this.peso=peso;
        this.rdp=rdp;
        this.rdc=rdc;
        this.ram=ram;
        this.encendido=encendido;
        this.cantidadCamara=cantidadCamara;
    }
    btnEncendido(){
        if (this.encendido != true) {
            this.encendido = true
        } else {
            console.log("El telefono ya esta encendido")
        }
    }
    btnReinciar(){
        if (this.encendido= true) {
            console.log("El celular se esta reiniciando")
        } else {
            console.log("No se pudo reiniciar debido a que esta apagado")
        }
    }
    tomarFoto(){
        console.log(`Se ha tomado una foto con una resolucion de ${this.rdc}`)
    }
    mostrandoInfo(){
        document.write(`El Color del celular es ${this.color}, el peso es ${this.peso}, la ram es de ${this.ram} y la resolucion de la pantalla es ${this.rdp}, y tiene ${this.cantidadCamara} camaras`)
    }
}
const celular1 = new Celular("Azul", "400g", "5px", "20px", "4GB", true, 2)
const celular2 = new Celular("Azul", "400g", "5px", "20px", "4GB", false, 2)
const celular3 = new Celular("Azul", "400g", "5px", "20px", "4GB", true, 2)
 
celular1.btnEncendido();
celular1.btnReinciar();
celular1.tomarFoto();
celular1.mostrandoInfo();

celular2.btnEncendido();
celular2.btnReinciar();
celular2.tomarFoto();
celular2.mostrandoInfo();

celular3.btnEncendido();
celular3.btnReinciar();
celular3.tomarFoto();
celular3.mostrandoInfo();