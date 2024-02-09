let precioProducto = prompt("Ingrese el precio del producto: ");

let precioFinal = (precioProducto >= 1000) ? precioProducto * 0.9: precioProducto;

console.log(precioFinal);