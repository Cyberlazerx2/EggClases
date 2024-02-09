const mensaje = document.querySelector('#mensaje')
mensaje.style.color = 'red'
mensaje.addEventListener('mouseenter', function(){
    mensaje.textContent = 'Hola Mundo';
})