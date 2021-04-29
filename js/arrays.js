// Métodos y propiedades de JS para Arrays

let frutas = ['manzanas','kiwis','peras'];

// Propiedades

for (i=0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Métodos mutables (modifican los valores de la variable de tipo array)

let frutaExtraida = frutas.pop(); // Extrae el último elemento del array
console.log(frutaExtraida);
console.log(frutas);

frutas.push('albaricoques','cerezas'); // Añade uno o varios elementos al final del array
console.log(frutas);

frutas.shift(); // Extrae el primer elemento del array y desplaza el resto a la izquierda
console.log(frutas);

frutas.unshift('plátanos','fresas'); // Añade uno o varios elementos al inicio del array y desplaza el resto a la derecha
console.log(frutas);

// Método splice para eliminar o sustituir elementos
// splice(indice, cantidad, elementos a sustituir)

frutas.splice(1, 2); // Elimina desde la posición 1 2 elementos
console.log(frutas);

frutas.splice(1, 1); // Elimina el array de la posición 1
console.log(frutas);

frutas.splice(1,1, 'peras') // Sustituye el elemento de la posición1 por el elemento del tercer argumento
console.log(frutas);

frutas.push('kiwis','naranjas');
console.log(frutas);

frutas.splice(2, 0, 'sandías','piñas'); // Añade los elementos del tercer argumento desde la posicón 2
console.log(frutas);

// Para ordenar

frutas.sort();
console.log(frutas);

frutas.reverse();
console.log(frutas);

// Los métodos en JS se pueden encadenar

let marcasVehiculos = ['Dacia','VW','SEAT','Audi','Renault'];

marcasVehiculos.sort().reverse();
console.log(marcasVehiculos);

// Métodos inmutables (no modifican el valor del array)

frutas = ['manzanas','kiwis','peras','fresas','naranjas'];

let frutasSeleccionadas = frutas.slice(2,4); // Extrae elementos desde la posición del primer argumento incluida
                                          // hasta la posición del segundo argumento excluida

console.log(frutas);
console.log(frutasSeleccionadas);

let hayPomelos = frutas.includes('pomelos'); // Devuelve true o false según exista o no el elemento pasado como argumento
console.log(hayPomelos);

let mensaje = frutas.join(' ❤ '); // Une los elementos de array en un string separados por el valor que se pase
                                   // como argumento (por defecto ,)
console.log(mensaje);

let vehiculosEuropeos = ['SEAT','Renault','Mercedes Benz'];
let vehiculosAsiaticos = ['Subaru','Hyunday','Lexus'];

marcasVehiculos = vehiculosEuropeos.concat(vehiculosAsiaticos);
console.log(marcasVehiculos);
