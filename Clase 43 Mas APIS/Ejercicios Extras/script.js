const btnApi = document.getElementById("btnApi");
const searchApi = document.getElementById("searhMovie");
const issInfo = document.getElementById("issInfo");

btnApi.addEventListener('click',  async function llamarApi(event){
    event.preventDefault();
    try{
        const response = await fetch('http://api.open-notify.org/iss-now.json');
        const data = await response.json();

        

        const estacionInfo = `<h3>Estacion Espacial Nro: ${data.timestamp}</h3>
                        <p>Longitud: ${data.iss_position.longitude}</p>
                        <p>Latitud: ${data.iss_position.latitude}</p>`
        issInfo.innerHTML = estacionInfo
    }catch(error){
        console.error(error);
    }
    

})