// Funciones callback en JS
// Como las funciones son de tipo objeto en JS esto
// permite pasarlas como argumento de otras funciones



function cuentaAtras(segundos, mostrarSegundos) {
    let timer = setInterval(function () {
        mostrarSegundos(segundos);
        segundos--;
        if (segundos === 0) {
            clearInterval(timer);
        }
    }, 1000)
}

cuentaAtras(10, (seg) => {
    console.log('Quedan ' + seg + ' segundos');
});

cuentaAtras(20, (seconds) => {
    console.log(seconds + ' seconds');
})
