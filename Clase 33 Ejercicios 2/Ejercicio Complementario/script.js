class Alumno {
    constructor(nombre,edad,promedio){
        this.nombre = nombre;
        this.edad = edad;
        this.promedio = promedio;
    }
}
class GestionAlumnos {
    constructor(alumnos){
        this.alumnos = alumnos
    }
    agregarAlumno(nombre,edad,promedio){
        
        this.alumnos.push(new Alumno(nombre, edad, promedio))
        
    }
    buscarAlumno(nombre){
        let  encontrado = false;

        this.alumnos.forEach((alumno)=>{
            if (alumno.nombre === nombre) {
                console.log(`${alumno.nombre} edad:${alumno.edad} promedio:${alumno.promedio}`)
                 encontrado=true;
            }
        })

        if(!encontrado){
            console.log("Error, no existe ese alumno");
        }
    }
    mostrarPromedioGeneral(){
        
        this.alumnos.forEach((alumno)=>{
            alumno.promedio += alumno.promedio
             
        })
        console.log(`el promedio total fue ${this.alumno.promedio}`)
    }
    
}

// Crear instancia de GestionAlumnos
const gestionAlumnos = new GestionAlumnos([]);
// Agregar alumnos
gestionAlumnos.agregarAlumno("Juan", 20, 8.5);
gestionAlumnos.agregarAlumno("Maria", 22, 9.0);
gestionAlumnos.agregarAlumno("Carlos", 19, 7.8);


// Buscar un alumno por nombre
gestionAlumnos.buscarAlumno("Maria");


// Mostrar el promedio general de todos los alumnos
gestionAlumnos.mostrarPromedioGeneral();