const botonParaBuscar = document.getElementById("button");
const contenedorDeReceta = document.getElementById("container")
const paraVaciar = document.getElementById("vaciar")
botonParaBuscar.addEventListener("click", ()=>{
    contenedorDeReceta.innerHTML=""
    mostrarReceta()
})
paraVaciar.addEventListener("click", ()=>{contenedorDeReceta.innerHTML=""} )
async function mostrarReceta(){
    let recetas = await obtenerReceta();
    const recetaABuscar = document.getElementById("receta").value;
    recetas.forEach(receta => {
        for (let i = 1; i <= 20; i++) {
            const ingrediente = receta[`strIngredient${i}`];
            if (ingrediente && ingrediente.toLowerCase() === recetaABuscar) {
                let contenedor = document.createElement("div");
                contenedor.className += "contenedor";
                let name = document.createElement("h1");
                name.textContent = receta.strMeal;
                name.className = "tituloDeReceta"
                let imagen = document.createElement("img");
                imagen.src = receta.strMealThumb;
                imagen.className += "imagenDeReceta";
                let message = document.createElement("p");
                message.textContent = receta.strInstructions;
                message.className = "pasoDeReceta"
                const ingredientesReceta = document.createElement('ul');
                for (let i = 1; i <= 20; i++) {
                    const ingrediente = receta[`strIngredient${i}`];
                    if (ingrediente) {
                        const li = document.createElement('li');
                        li.textContent =`${ingrediente} - ${receta[`strMeasure${i}`]}`
                        ingredientesReceta.appendChild(li);
                    }
                }
                contenedor.appendChild(name);
                contenedor.appendChild(imagen);
                contenedor.appendChild(message);
                contenedor.appendChild(ingredientesReceta);
                contenedorDeReceta.appendChild(contenedor);
            };
        };
    });
}
async function obtenerReceta(){
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" );
        if(response.ok){
            const data = await response.json();
            return data.meals;
        }else{
            console.error("Error al obtener Receta")
        }
        
    } catch (error) {
        console.error("Ha ocrrido un Error: " + error)
    }
}