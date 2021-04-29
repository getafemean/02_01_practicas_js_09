// Paso por valor y por referencia en JS

// Los tipos primitivos tienen su paso por valor

let a = 'Juan';
let b = a;
console.log(b);
b = 'Ana';
console.log(a);
console.log(b);

// Los tipos compuestos (Arrays y objetos) tienen su paso por referencia

let c = [1,2,3];
let d = c;
console.log(d);

d.push(4);
console.log(c);
console.log(d);

// Romper el paso por referencia

// Con concat

let vehiculosEuropeos = ['SEAT','Renault','Mercedes Benz'];

let marcasSeleccionadas = vehiculosEuropeos.concat(); // Rompe el paso por referencia

marcasSeleccionadas.pop();
console.log(vehiculosEuropeos);
console.log(marcasSeleccionadas);

// Con spread operator ... ECMA6

let marcasCoreanas = ['KIA','Hyundai'];
let marcasJaponesas = ['Toyota','Lexus','Mazda'];

let marcasAsiaticas = [...marcasCoreanas, ...marcasJaponesas];
console.log(marcasAsiaticas);

marcasAsiaticas.push('Subaru');
console.log(marcasAsiaticas);
console.log(marcasCoreanas);
console.log(marcasJaponesas);
