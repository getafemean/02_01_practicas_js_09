// Métodos y propiedades de arrays de objetos

let alumnos = [
    {nombre: 'María', apellidos: 'Zuil', puntuacion: 4.6},
    {nombre: 'Juan', apellidos: 'Gómez', puntuacion: 7},
    {nombre: 'Laura', apellidos: 'López', puntuacion: 9.6},
    {nombre: 'Carlos', apellidos: 'Pérez', puntuacion: 6.7}
]

// Ciclo forEach ECMA6
// <array>.forEach((elemento, indice) => { La función flecha se ejecuta tantas veces como elementos tiene el array
//    Código a ejecutar                    La flecha en cada ejecución recibe el elemento del array como primer argumento
//    con cada elemento                    y el índice de ese elemento como segundo argumento   
//})

let alumnosAptos = [];

alumnos.forEach(elem => {
    if(elem.puntuacion >= 5) {
        elem.apto = true;
        alumnosAptos.push(elem);
    } else {
        elem.apto = false;
    }
})

console.log(alumnosAptos);
console.log(alumnos);

// Ciclo map ECMA6
// Devuelve en un array el resultado del código utilizado sobre cada elemento que se recorre del array original
// <array>.map((elemento, indice) => {
//    código a ejecutar con cada elemento
//    return <valor>
// })

let nombreAlumnos = alumnos.map((elem, i) => {
    return `${i + 1}.- ${elem.nombre} ${elem.apellidos}`;
})

console.log(nombreAlumnos);

// Otro ejemplo con map

let dataSet = [
    {
        "pais": "ES",
        "provincia": "BA",
        "04-01-21": "430",
        "04-02-21": "450",
        "04-03-21": "490",
        "04-04-21": "310"
    },
    {
        "pais": "ES",
        "provincia": "MA",
        "04-01-21": "230",
        "04-02-21": "480",
        "04-03-21": "290",
        "04-04-21": "510"
    }
]

let dataSetPromedio = dataSet.map(({pais, provincia, ...datosDiarios}) => {
    let totalDatosDiarios = 0;
    Object.values(datosDiarios).forEach(elem => {
        totalDatosDiarios += elem*1;
    })
    return {
        pais, 
        provincia, 
        promedio: totalDatosDiarios / Object.values(datosDiarios).length
    };
})

// Object.values() devuelve en un array los valores de las propiedades enumeradas
console.log(dataSetPromedio);

// Ciclo filter ECMA6

let alumnosNoAptos = alumnos.filter(elem => {
    return elem.puntuacion < 5;
})

console.log(alumnosNoAptos);

// Ciclo reduce ECMA6
// Recorre los elementos del array y en cada ciclo de iteración
// actualizar (código) un valor de inicio y otro valor de fin
// a partir de los valores de cada elemento
// <array>.reduce((inicio, fin) => {
//    // código de actualización de inicio y fin
// })

let puntuaciones = [12.3, 23.4, 45.6, 13.2 ];

let sumaPuntuaciones = puntuaciones.reduce((ini, fin) => {
    return ini + fin;
})

console.log(sumaPuntuaciones);

alumnos = [
    {nombre: 'María', apellidos: 'Zuil', puntuaciones: [4.3,3.5,7.8,8.1]},
    {nombre: 'Juan', apellidos: 'Gómez', puntuaciones: [4.9,5.6,7.1,2.4]},
    {nombre: 'Laura', apellidos: 'López', puntuaciones: [3.3,9.5,6.8,3.1]},
    {nombre: 'Carlos', apellidos: 'Pérez', puntuaciones: [7.3,3.9,9.8,4.1]}
]

alumnos.forEach(alumno => {
    let sumaPuntuaciones = alumno.puntuaciones.reduce((ini, fin) => {
        return ini + fin;
    })
    alumno.puntuacionPromedio = sumaPuntuaciones / alumno.puntuaciones.length;
})

console.log(alumnos);

// Uso de sort en arrays de objetos
// Permite pasarle como argumento una función de ordenación

function compararApellidosAscendente(a,b) {
    if (a.apellidos > b.apellidos) {
        return 1;
    }
    if (a.apellidos < b.apellidos) {
        return -1
    }
    return 0;
}

function compararApellidosDescendente(c,d) {
    if (c.apellidos < d.apellidos) {
        return 1;
    }
    if (c.apellidos > d.apellidos) {
        return -1
    }
    return 0;
}

alumnos.sort(compararApellidosAscendente);
console.log(alumnos);

let alumnosDescente =  [...alumnos].sort(compararApellidosDescendente);
console.log(alumnosDescente);
