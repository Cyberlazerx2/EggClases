//EJERCICIO 1

function contadorVocal(){
    let textoIngresada = document.getElementById("vocales").value;
    let mensaje= document.getElementById("mensaje1");

    let textoMinuscula = textoIngresada.toLowerCase();
    let contador = 0;
    let vocales = ["a","e","i","o","u"];

    for (let i = 0; i < textoMinuscula.length; i++) {
        if (vocales.includes(textoMinuscula[i]) ) {
            contador++;
        }
        
    }
    mensaje.textContent= "La cantidad de vocales es " + contador;
}

//EJERCICIO 2

function formatoTitulo(){
    let textoIngresada = document.getElementById("titulo").value;
    let mensaje= document.getElementById("mensaje2");

    //Hola como estas
    textoIngresada = textoIngresada.split(' ');
    //array= [hola, como, estas]

    //arrray = [Hola, Como, Estas]
    const palabraConformada = textoIngresada.map(function(palabra){
        
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    
    const palabraFinal = palabraConformada.join(' ');
    mensaje.textContent = palabraFinal;
}

// EJERCICIO 3

function abreviar(){
    let textoIngresada = document.getElementById("abreviatura").value;
    let mensaje= document.getElementById("mensaje3");

    textoIngresada = textoIngresada.split(' ');
    //array = [hola, como, estas]
    const palabraConformada = textoIngresada.map(function(palabra){
        
        return palabra.charAt(0).toUpperCase();
    });
    const palabraFinal = palabraConformada.join('');
    mensaje.textContent = palabraFinal;
}

// EJERCICIO 4

function palindromos(){
    let textoIngresada = document.getElementById("palindromo").value;
    let mensaje= document.getElementById("mensaje4");

    //Hola como esta => holacomoestas
    let textoLimpio = textoIngresada.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(textoLimpio);
    
    let textoInvertido = textoLimpio.split('').reverse().join('');
    console.log(textoInvertido);

    if(textoLimpio == textoInvertido){
        mensaje.textContent = `${textoIngresada} es un palindromo`;
    }else{
        mensaje.textContent = `${textoIngresada} no es un palindromo`;
    }

}

//EJERCICIO 5

function contarOcurrencia(){
    let textoIngresada = document.getElementById("ocurrencia").value;
    let mensaje= document.getElementById("mensaje5");
    let busqueda = document.getElementById("buscar").value;

    let textoSeparado = textoIngresada.toLowerCase().split(' ');
    let busquedaMinuscula = busqueda.toLowerCase();
    let contador = 0;


    for (let palabra of textoSeparado) {
        if(busquedaMinuscula == palabra){
            contador++;
        }
    }
    mensaje.textContent = `La palabra ${busqueda} se encontro ${contador} veces`;
}

//EJERCICIO 6

function remplazarPalabra(){
    let textoIngresada = document.getElementById("texto").value;
    let mensaje= document.getElementById("mensaje6");
    let remplazar = document.getElementById("remplazar").value;
    let aRemplazar = document.getElementById("aremplazar").value;

    const regex = new RegExp(remplazar,'gi');
    const cadenaRemplazada = textoIngresada.replace(regex,aRemplazar);

    mensaje.textContent= `${cadenaRemplazada}`
}

// 