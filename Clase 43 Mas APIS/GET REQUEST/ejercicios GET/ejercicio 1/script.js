const getCatButton = document.getElementById("getCatButton"); 
const catInfo = document.getElementById("catInfo"); 
async function getRandomCat() { 
    try { 
        const response = await fetch('https://api.thecatapi.com/v1/images/search'); 
    const data = await response.json();
    const gatitoRandom = Math.floor(Math.random()*data.length);
    


    const catHTML = ` <h2>${data[gatitoRandom].id}</h2> 
                          <img src="${data[gatitoRandom].url}" alt="${data[gatitoRandom].id}"> 
                          <p><strong>Ancho:</strong> ${data[gatitoRandom].width} decimetros</p>
                          <p><strong>Alto:</strong> ${data[gatitoRandom].height} decimetros</p>`; 
    catInfo.innerHTML = catHTML; 
    } catch (error) {
         catInfo.innerHTML = '<p>Error al obtener el cat</p>'; 
    console.error(error); } } 
getCatButton.addEventListener('click', getRandomCat);