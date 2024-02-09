const pokemonForm = document.getElementById("pokemonForm");

async function updatePokemon(event){
    event.preventDefault();

    try {
        const postId = document.getElementById("postId").value;
        const newTitle = document.getElementById("newTitle").value;
        const newUserId = document.getElementById("newUserId").value;
        const newMes = document.getElementById("newMes").value;

        const updatePokemonData = {
            id: postId,
            title : newTitle,
            body : newMes,
            userId : newUserId,
        };
        console.log(postId);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
            method : 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatePokemonData),
        });
        if (response.ok){
            alert("Pokemon actualizado Correctamente");
        }else{
            alert("Error al actualizar el Pokemon");
        }

    } catch (error) {
        alert('Error al actualizar el pokemon');
        console.error(error);
    }
}
pokemonForm.addEventListener('submit', updatePokemon)