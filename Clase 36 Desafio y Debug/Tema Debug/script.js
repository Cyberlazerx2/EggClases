'use strict'; 
const datos1 = [17, 21, 23]; 

const datos2 = [12, 5, -5, 0, 4]; 

const imprimirTemperaturas = function (temperaturas) { 
    let str = ''; 
    console.log(temperaturas)
    for (let i = 0; i < temperaturas.length; i++) { 
        str = str + `${temperaturas[i]}°C / `; 
        
    } 

    console.table(str); 
}; 

imprimirTemperaturas(datos1);