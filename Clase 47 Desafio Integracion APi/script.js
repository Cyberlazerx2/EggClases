
const container = document.getElementById("container");

generateBooks()

//Generando libros
async function generateBooks(){
    try {
        const books = await apiCalling();
        
        //const booksCategories = await gettingCategories();
        
        books.forEach(async function start(bookInformation){
        const booksAuthors = await gettingAuthors(bookInformation);
        
        const bookDiv = document.createElement("div")
        const buyBookBton = document.createElement("button")
        buyBookBton.innerText = 'Comprar ya!'
        bookDiv.innerHTML = `
            <h1>Titulo: ${bookInformation.volumeInfo.title}</h1>
            <img src="${bookInformation.volumeInfo.imageLinks.thumbnail}">
            <h2>Lenguajes Disponibles: ${bookInformation.volumeInfo.language}</h2>
            

        `;
        container.appendChild(bookDiv)
        container.appendChild(buyBookBton)
        if(booksAuthors){
            const autorH2 = document.createElement("h2")
            autorH2.innerText ="Autores: " +booksAuthors
            container.appendChild(autorH2)
        }
    });

    } catch (error) {
        console.error("Error: "+error);
    }
    }


//Verificando la cantidad de autores para el libro
async function gettingAuthors(books){
    try {
        const author = books.volumeInfo.authors
        const listAuthors = author
        
        if (listAuthors){
            console.log(listAuthors)
            if(listAuthors > 1){
                listAuthors = listAuthors.join(" , ")
            }
            return listAuthors
        }
    } catch (error) {
        console.error("Error: "+error);
    }
    
}


//Obteniendo la Api
async function apiCalling(){
    try {
        const apiLink = await fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms")
        const apiData = await apiLink.json();
        const books = apiData.items;
        return books;
    } catch (error) {
        console.error("Error: "+error);
    }
    
}

