const getCountryButton = document.getElementById("getCountryButton"); 
const countryInfo = document.getElementById("countryInfo"); 
async function getCountryCat() { 
    try { 
        const response = await fetch('https://restcountries.com/v3/all'); 
    const data = await response.json();
    const gatitoRandom = Math.floor(Math.random()*data.length);
    


    const countryHTML = ` <h2>${data[gatitoRandom].name.common}</h2> 
                          <img src="${data[gatitoRandom].flags[0]}"> 
                          <p><strong>Capital:</strong> ${data[gatitoRandom].capital}</p>`; 
    countryInfo.innerHTML = countryHTML; 
    } catch (error) {
         catInfo.innerHTML = '<p>Error al obtener el cat</p>'; 
    console.error(error); } }
     
getCountryButton.addEventListener('click', getCountryCat);