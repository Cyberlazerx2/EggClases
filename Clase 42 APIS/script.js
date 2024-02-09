document.addEventListener("DOMContentLoaded", () =>{
    let lista = document.getElementById("caracteristicas");
    console.log(lista)
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
        .then(response => response.json())
        .then(data => {
            data.results.forEach(pokemon => {
                const listaPokemon = document.createElement("li");
                listaPokemon.textContent = pokemon.name;
                lista.appendChild(listaPokemon);
            });
        })
        .catch(error => {
            alert("Fallo con el servidor ", error);
        })


    let lista2 = document.getElementById("star");
    console.log(lista2)
    fetch("https://swapi.dev/api/people/")
        .then(response => response.json())
        .then(data => {
            data.results.forEach(personaje => {
                const listaStarWar = document.createElement("li");
                listaStarWar.textContent = personaje.name;
                lista2.appendChild(listaStarWar);
            });
        })
        .catch(error => {
            alert("Fallo con el servidor ", error);
        })
})