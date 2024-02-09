const btnCheck = document.querySelector(".check");
const guess = document.querySelector('.guess');
const mensaje = document.querySelector('.message')
mensaje.textContent = "⛔️ Ingrese Numero!"  
btnCheck.addEventListener('click', ()=>{
    
    let valor = parseInt(guess.value);
    console.log(typeof valor)
    if (typeof valor == "number") {
        mensaje.textContent = "🎉 Es el número!"
    }
})

