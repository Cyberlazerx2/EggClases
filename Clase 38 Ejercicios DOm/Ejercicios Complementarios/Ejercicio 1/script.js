const btn = document.querySelector('#btn')
const contador = document.querySelector('#contador')
var cantidad = 0;
btn.addEventListener('click', function(){
    contador.innerHTML = cantidad++;
})