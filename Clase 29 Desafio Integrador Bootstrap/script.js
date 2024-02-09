//Selecciona el elmento del carrusel por su ID
const miCarrusel = document.querySelector("#miCarrusel");

//Inicializa el carrusel utilizando el objeto Carousel de Bootstrap
const myCarousel = new bootstrap.Carousel(miCarrusel,{
    interval: 3000, //Cambio de diapositiva cada 3 segundos
    pause: "hover" // pausar cuando el cursor esta sobre el carrusel    
})