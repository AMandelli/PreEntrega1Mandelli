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
    alert("Gracias por utilizar nuestros servicios!");
       
}else if(nuevoCalculo == "no"){
    alert("Gracias por utilizar nuestros servicios!");
}else{
    alert("Funcion no disponible");
}

console.log("¡Gracias por utilizar nuestros servicios!"); 

// jueguemos un juego

alert("Ahora te invito a que juegues conmigo... tenes que adivinar en que numero estoy pensado...");

let juego = Number(prompt("Ingrese un numero del 1 al 10"));
console.log(juego);

while(juego !=7){
    alert("El numero ingresado no es el que estoy pensando... seguí participando");

    juego = Number(prompt("Ingrese un numero del 1 al 10"));
}
alert("Felicidades! adivinaste que numero esta en mi cabeza");
console.log("Felicidades! adivinaste que numero esta en mi cabeza");
console.log("Gracias por utilizar nuestro sitio web :D");
document.write("Gracias por utilizar nuestro sitio web :D"); 

// calculadora 

function calculadora(primerNumero, segundoNumero, operacion){
    switch (operacion){
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;    
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
        return 0;        
    }
}
        
console.log(calculadora(5, 5, "+"));
console.log(calculadora(5, 5, "-"));
console.log(calculadora(5, 5, "*"));
console.log(calculadora(5, 5, "/"));
















