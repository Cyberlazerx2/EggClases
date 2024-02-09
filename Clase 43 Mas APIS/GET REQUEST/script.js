const getPokemonButton = document.getElementById("getPokemonButton"); 
const pokemonInfo = document.getElementById("pokemonInfo"); 
async function getRandomPokemon() { 
    try { 
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000'); 
    const data = await response.json(); 
    const randomIndex = Math.floor(Math.random() * data.results.length); 
    const pokemonUrl = data.results[randomIndex].url; 
    const pokemonResponse = await fetch(pokemonUrl); 
    const pokemonData = await pokemonResponse.json(); 
    const pokemonHTML = ` <h2>${pokemonData.name.toUpperCase()}</h2> 
                          <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}"> 
                          <p><strong>Peso:</strong> ${pokemonData.weight} decimetros</p>
                          <p><strong>Habilidades:</strong> ${pokemonData.abilities.map(ability => ability.ability.name)}</p> `; 
    pokemonInfo.innerHTML = pokemonHTML; 
    } catch (error) {
         pokemonInfo.innerHTML = '<p>Error al obtener el Pokemon</p>'; 
    console.error(error); } } 
getPokemonButton.addEventListener('click', getRandomPokemon);