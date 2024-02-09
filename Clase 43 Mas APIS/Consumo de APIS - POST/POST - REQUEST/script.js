const formulario = document.getElementById('formulario');
const boton = document.getElementById("btn");


boton.addEventListener("click", async function enviarBlog(event){
    event.preventDefault();
    try{
        const title = document.getElementById("titulo").value;
        const body = document.getElementById("body").value;
        const userId = document.getElementById("userID").value;
        const newBlog = {
            title,
            body,
            userId,
        };

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newBlog)
        });
        const data = await response.json();
        alert("Nuevo Blog agregado: " + data.title)
    }catch(error){
        alert("Error al agregar el nuevo blog")
        console.error(error);
    }
})
