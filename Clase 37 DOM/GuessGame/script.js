
/*----------EJERCICIO 1-------*/
// Asignar el elemento correcto a la variable
const buttonElem = document.querySelector(".check"); //AQUI DEBEN COLOCAR EL SELECTOR
const adivinar = document.getElementById('h1H1');

adivinar.innerText= "JUEGO DE ADIVINAR"

buttonElem.addEventListener("click", () => {
  let oldText = buttonElem.innerText;

  const result = (buttonElem.innerText =
    oldText == "CHECK!" ? "OFF" : "CHECK!");

  return result;
});

