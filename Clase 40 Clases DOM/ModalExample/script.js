'use strict';

const botones = document.querySelectorAll(".show-modal");
const ventanaEmergente = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector('.close-modal')
const body = document.querySelector("body");

for (let i = 0; i < botones.length; i++) {
        console.log(botones[i]);
        botones[i].addEventListener('click', () => console.log("Hice Click"))
        botones[i].addEventListener('click', () =>{
        ventanaEmergente.classList.remove("hidden")
        overlay.classList.remove("hidden")
    })
}

closeModal.addEventListener('click' , () =>{
    ventanaEmergente.classList.add("hidden");
    overlay.classList.add("hidden");
    
});

overlay.addEventListener('click' , () =>{
    ventanaEmergente.classList.add("hidden");
    overlay.classList.add("hidden");
    
});

body.addEventListener('keydown', (event) =>{
    if(event.key === "Escape"){
        ventanaEmergente.classList.add("hidden");
        overlay.classList.add("hidden");
    }
})

botones[1].textContent = "hola";