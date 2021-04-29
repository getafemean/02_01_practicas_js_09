// Métodos y propiedades de JS para number

// Clase global Math

// Redondeo

let puntuacion = 2.5;

let puntuacionRedondeada = Math.round(puntuacion);
console.log(puntuacionRedondeada);

puntuacion = -2.5;
puntuacionRedondeada = puntuacion < 0 ? Math.round(-puntuacion) * -1 : Math.round(puntuacion);
console.log(puntuacionRedondeada);

// Redondeo al alza

puntuacion = 9.3

puntuacionAlAlza = Math.ceil(puntuacion);
console.log(puntuacionAlAlza);

// Redondeo a la baja 

puntuacionAlaBaja = Math.floor(puntuacion);
console.log(puntuacionAlaBaja);

// random() devuelve un número aleatorio entre 0 y 0.99999999

let nombres = ['Juan','Sara','Carlos','Lucía'];

let nombreAlAzar = nombres[Math.floor(Math.random() * nombres.length)];
console.log(nombreAlAzar);

// Parseo de string a number 

let resultado = '9.7'; // tipo string

let resultadoParseado = parseFloat(resultado); // Convierte a number manteniendo la parte flotante
console.log(resultadoParseado);

resultadoParseado = parseInt(resultado); // Convierte a number pero solo mantiene la parte entera
console.log(resultadoParseado);

// Parseo de number a string

let resultado2 = 56.7;

let resultadoParseado2 = resultado2.toString();
console.log(resultadoParseado2);

// Procedimiento "trick"

let resultado3 = '12.345';
let resultadoParseado3 = resultado3 * 1; // (ó +resultado3)
console.log(resultadoParseado3);

let resultado4 = 123.998;
let resultadoParseado4 = resultado4 + '';
console.log(resultadoParseado4);
