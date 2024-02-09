let elementos1 = {
    titulo: "Perros",
    descripcion: "Mira estos perros",
    imagen: "imagenes/perro.jpg",
    categoria: "perro",
};
let elementos2 = {
    titulo: "Gatos",
    descripcion: "Mira estos gatos",
    imagen: "imagenes/gato.jpeg",
    categoria: "gato",
};
let elementos3 = {
    titulo: "Peces",
    descripcion: "Mira estos Peces",
    imagen: "imagenes/peces.jpg",
    categoria: "pece",
};

let matrixObjetos = [elementos1, elementos2, elementos3];
const contenedor = document.querySelector(".row");

crearGaleria();

function crearGaleria() {
    for (let i = 0; i < matrixObjetos.length; i++) {
        const elemento = document.createElement('div');
        elemento.classList.add('card', 'col-sm')
        elemento.innerHTML = `
            <img src="${matrixObjetos[i].imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${matrixObjetos[i].titulo}</h5>
                <p class="card-text">${matrixObjetos[i].descripcion}.</p>
                
            </div>
        `;
        contenedor.appendChild(elemento);
    }
}

// ... (Tu código para crear la galería)

function limpiarGaleria() {
    const galeria = document.getElementById("galeria");
    galeria.innerHTML = ''; // Limpia el contenido anterior
}

function mostrarElementosCategoria(categoria) {
    limpiarGaleria();
    if(categoria == "quitarfiltro"){
        crearGaleria();
    }
    

    for (let i = 0; i < matrixObjetos.length; i++) {
        if (matrixObjetos[i].categoria === categoria) {
            const elemento = document.createElement('div');
            elemento.classList.add('card', 'col-sm');
            elemento.innerHTML = `
                <img src="${matrixObjetos[i].imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${matrixObjetos[i].titulo}</h5>
                    <p class="card-text">${matrixObjetos[i].descripcion}.</p>
                </div>
            `;
            contenedor.appendChild(elemento);
        }
    }
}

const inicioDelFiltro = document.querySelector(".dropdown-menu");
inicioDelFiltro.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("perros")) {
        mostrarElementosCategoria("perro");
    } else if (target.classList.contains("gatos")) {
        mostrarElementosCategoria("gato");
    } else if (target.classList.contains("peces")) {
        mostrarElementosCategoria("pece");
    }else if (target.classList.contains("quitarfiltro")){
        mostrarElementosCategoria("quitarfiltro");
    }
});

//Para organizar segun la seleccion
const inicioDeOrden = document.querySelector(".ordenar");
inicioDeOrden.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("ordenAlfabetico")) {
        ordenarElementos("ordenAlfabetico");
    } else if (target.classList.contains("perrosPrimero")) {
        ordenarElementos("perro");
    } else if (target.classList.contains("pecesPrimero")) {
        ordenarElementos("pece");
    }else if (target.classList.contains("gatosPrimero")){
        ordenarElementos("gato");
    }else if (target.classList.contains("reset")){
        ordenarElementos("reset")
    } 
});

function ordenarElementos(categoria) {
    limpiarGaleria();
    switch (categoria) {
        case "pece":
            matrixObjetos = [elementos1, elementos2, elementos3];
          // Ordena las imágenes de peces primero.
            matrixObjetos.unshift(elementos3);
            matrixObjetos.filter();
            crearGaleria();
            break;
        case "perro":
            matrixObjetos = [elementos1, elementos2, elementos3];
          // Ordena las imágenes de perros primero.
            matrixObjetos.unshift(elementos1);
            crearGaleria();
            break;
        case "gato":
            matrixObjetos = [elementos1, elementos2, elementos3];
          // Ordena las imágenes de gatos primero.
            matrixObjetos.unshift(elementos2);
            crearGaleria();
            break;
        case "reset":
          // Devuelve el orden normal de las imágenes.
            matrixObjetos = [elementos1, elementos2, elementos3];
            crearGaleria();
            break;
        case "ordenAlfabetico":
            matrixObjetos = [elementos1, elementos2, elementos3];
            matrixObjetos.unshift(elementos3);
            crearGaleria();
            break;
        
    }

    
}