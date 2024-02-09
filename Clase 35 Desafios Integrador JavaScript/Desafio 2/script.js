const fisica = {nombre: 'Física', profesor: 'Felipe', alumnos: ['María', 'Juan', 'Gustavo']};
const matematica = {nombre: 'Matemática', profesor: 'Alberto', alumnos: ['Carlos', 'Juan', 'Gustavo']};
const quimica = {nombre: 'Química', profesor: 'Matías', alumnos: ['María', 'Pedro', 'Víctor']};


const materias = [fisica, matematica, quimica]

function obtenerInfo(materia) {
    switch (materia) {
        case 'Física':
            return fisica;
        case 'Matemática':
            return matematica;
        case 'Química':
            return quimica;    
        default:
            document.write('Error, materia no encontrada<br>');
            break;
    }
}

function mostrarInfo(materia) {
    const info = obtenerInfo(materia)
    document.write(`Profesor: ${info.profesor}<br>Alumnos: ${info.alumnos}<br>`);
}

function cantidadDeClases(estudiante) {
    var clasesInscritas = [];
    materias.forEach(materia =>{
        if (materia.alumnos.includes(estudiante) === true) {
            clasesInscritas.push(materia.nombre)
        }
    })

    document.write(`${estudiante} está inscrito(a) en ${clasesInscritas.length} clases: ${clasesInscritas}<br>`);
}

mostrarInfo(prompt('Ingrese una materia'));
cantidadDeClases(prompt('Ingrese un alumno'))