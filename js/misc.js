// Varios ECMA6

// desestructing 

// para arrays

let valores = [10, 20, 30, 40, 50, 60];

const [valor1, valor2, valor3, ...restoValores] = valores; // Una constante con cada valor del array

console.log(valor1);
console.log(valor2);
console.log(valor3);
console.log(restoValores);

// objetos

let alumno = {
    nombre: 'Juan',
    apellidos: 'Pérez',
    edad: 12
}

let {apellidos, edad} = alumno;

console.log(apellidos);
console.log(edad);

