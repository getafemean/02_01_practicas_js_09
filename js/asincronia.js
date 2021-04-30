// Métodos de asincronía en JavaScript
// setTimeout permite retrasar temporalmente la ejecución de un bloque

console.log('Hola');
setTimeout(function() {
    console.log('Mensaje con delay de 2 segundos');
}, 2000)
console.log('Mundo!');

// setInterval permite es ejecutar un bloque cada cierto intervalo de tiempo

let contador = 0;
let timer = setInterval(function () {
    console.log(++contador);
    if(contador === 10) {
        clearInterval(timer);
    }
}, 1000);
