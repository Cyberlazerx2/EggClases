const estudiantes = [
    {nombre: "Ana", edad: 20, promedio: 9.5},
    {nombre: "Pedro", edad: 22, promedio: 7.8},
    {nombre: "Maria", edad: 19, promedio: 8.2},
    {nombre: "Juan", edad: 21, promedio: 6.5},
    {nombre: "Luisa", edad: 23, promedio: 9.0},
]

const estudiantesAprobados = estudiantes.filter(estudiante => estudiante.promedio >= 7.0)

estudiantesAprobados.forEach(estudiante => {
    document.write(`<p>${estudiante.nombre} - Edad: ${estudiante.edad} - Promedio: ${estudiante.promedio}`)
})