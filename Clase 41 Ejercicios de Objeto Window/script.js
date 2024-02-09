const btnOpen = document.getElementById("openWindow")
const btnSend = document.getElementById("sendMessage")


btnOpen.addEventListener('click' , () =>{
    const otherWindow = window.open();
    return otherWindow
})


btnSend.addEventListener('click', () =>{
    const otherWindow = window.open("index2.html");
    otherWindow.postMessage("Hola desdela otra pagina", 'index2.html');
  
})