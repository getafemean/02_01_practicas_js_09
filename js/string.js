// Métodos y propiedades de JS para string

// let nombre = new String('Juan');
let nombre = 'Juan';

console.log(nombre.length); // Devuelve el nº de caracteres

console.log(nombre.toLowerCase()); // Devuelve el valor transformado a minúsculas
console.log(nombre.toUpperCase()); // Devuelve el valor transformado a mayúsculas

console.log(nombre); // Los métodos anteriores son inmutables 

nombreEnMinusculas = nombre.toLowerCase(); // Los métodos inmutables se usan para asignar a otra variable el valor transformado

console.log(nombre.charAt(2)); // Devuelve el caracter de la posición pasada como argumento (indexado a cero)

console.log(nombre.indexOf('n')); // Devuelve la posición de la primera coincidencia
console.log(nombre.indexOf('x')); // Si no encuentra coincidencias devolver -1

nombre = 'Amanda';

console.log(nombre.lastIndexOf('a')); // Devuelve la posición de la última coincidencia
console.log(nombre.includes('nda')); // Devuelve true o false si contiene el fragmento

console.log(nombre.startsWith('A')) // Devuelve true o false si coincide con el primer caracter de la cadena
console.log(nombre.endsWith('z')) // Devuelve true o false si coincide con el primer caracter de la cadena

let apellidos = 'Pérez López';

let nombreCompleto = nombre.concat(' ' + apellidos);

console.log(nombreCompleto);

let frase = '         Buenos días, necesito información sobre...            ';

console.log(frase.trim()); // Eliminar los espacios en blanco del principio y final de la cadena

let password = '012345abcde';

console.log(password.slice(2, 5)) // Devuelve el fragmento desde la primera posición incluida
                              //hasta la segunda posición excluida

console.log(password.slice(-2)); // Pasando argumento negativo devuelve los n últimos caracteres