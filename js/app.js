// Calculo de actualizacion de alquileres 

let alquiler = Number(prompt("Ingrese monto a calcular"));
console.log(alquiler);

const INDICE_BCOCENTRAL = 1.88;
console.log(INDICE_BCOCENTRAL);

let actualizacion = alquiler * INDICE_BCOCENTRAL;
console.log(actualizacion);

console.log("El monto actualizado es $" + actualizacion);
alert("El monto actualizado es $" + actualizacion);


let nuevoCalculo;
    
nuevoCalculo = prompt("¿Desea relizar un nuevo calculo?");
console.log(nuevoCalculo);
    
let nuevoMonto;

if(nuevoCalculo == "si"){
    nuevoMonto = Number(prompt("Ingrese el monto"));
    console.log(nuevoMonto);
    console.log(INDICE_BCOCENTRAL);
    actualizacion = nuevoMonto * INDICE_BCOCENTRAL;
    console.log(actualizacion);
    console.log("El monto actualizado es $" + actualizacion);
    alert("El monto actualizado es $" + actualizacion);
       
}else if(nuevoCalculo == "no"){
    alert("Gracias por utilizar nuestros servicios!");
}else{
    alert("Funcion no disponible");
}

alert("¡Gracias por utilizar nuestros servicios!");
console.log("¡Gracias por utilizar nuestros servicios!");












