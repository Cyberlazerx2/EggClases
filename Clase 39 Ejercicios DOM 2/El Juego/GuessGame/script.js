//* Puntaje
var puntaje = 20;
var puntajeMaximo = 0;

//* Botones
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

//* Input
const valor = document.querySelector('.guess');

//* numero secreto
const PantallaDeNumeroSecreto = document.querySelector('.number')

//* Mensaje, puntuaje actual, puntuaje alcanzado
const mensaje = document.querySelector('.message')
const puntajeActual = document.querySelector('.label-score')
const puntajeAlcanzado = document.querySelector('.label-highscore')

//* Numero a buscar
let numero = Math.floor(Math.random()*20+1)

PantallaDeNumeroSecreto.textContent = '?'
puntajeActual.textContent = `Puntaje: ${puntaje}`
btnCheck.addEventListener('click', ()=>{
    if (valor.value == numero) {
        mensaje.textContent = "🎉 Es el número!"
        puntajeActual.textContent = `Puntaje: ${puntaje}`
        if(puntaje > puntajeMaximo){
            puntajeMaximo = puntaje
            puntajeAlcanzado.textContent = `Máximo: ${puntajeMaximo}`;
        }

        PantallaDeNumeroSecreto.textContent = numero;
        body.style.backgroundColor = 'green'

    }else if(valor.value > numero){
        puntaje--;
        mensaje.textContent = "📈 Muy Alto!"
        puntajeActual.textContent = `Puntaje: ${puntaje}`
        
    }else if(valor.value < numero){
        puntaje--;
        mensaje.textContent = "📉 Muy bajo!"
        puntajeActual.textContent = `Puntaje: ${puntaje}`
    }
    
    if(puntaje == 0){
        mensaje.textContent = "💥 Perdiste!"
        puntajeActual.textContent = `Puntaje: ${puntaje}`
        body.style.backgroundColor = 'red'
    }else if(puntaje < 0){
        location.reload();
    }
})

btnAgain.addEventListener('click', ()=>{
    puntaje = 20;
    puntajeActual.textContent = `Puntaje: ${puntaje}`
    body.style.backgroundColor = 'gray'
    PantallaDeNumeroSecreto.textContent = '?'
    valor.value = null;
    numero = Math.floor(Math.random()*20+1)
})

const body = document.querySelector('body');