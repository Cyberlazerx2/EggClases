let frase =parseInt(prompt("Ingrese una frase"));

cifradoCesar(frase);

function cifradoCesar(frase){
    
    while(isNaN(frase) == false){
        alert("Por favor ingrese una frase o palabras, no numeros");
        frase = prompt("Ingrese de nuevo");
    };

    let abecedarioEnMinusculas = split("abcdefghijklmnopqrstuvwxyz")
    let abecedarioEnMayusculas = split("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    
};
