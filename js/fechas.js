// Métodos y propiedades para Fechas

// Date

// Obtener la fecha actual

let fechaActual = new Date();
console.log(fechaActual);

// Establecer fechas en JS
// 1ª Opción pasando argumentos: año, mes (indexado a cero), dia, hora, minutos, segundos, milisegundos

let fechaNacimiento = new Date(1991, 1, 11, 15, 22, 23);
console.log(fechaNacimiento);

// 2ª Opción pasando argumento: fecha-string 'yyyy-MM-dd'

let fechaExpedicion = new Date('2021-04-14');
console.log(fechaExpedicion);

// 3ª Opción pasando argumento fecha epoch en milisegundos

let fechaAleatoria = new Date(7787298732451);
console.log(fechaAleatoria);

// Métodos para los objetos Date

console.log(fechaActual.getFullYear()); // Devuelve el año de la fecha
console.log(fechaActual.getMonth()); // Devuelve el mes de la fecha (indexado a cero)

const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
]

console.log(meses[fechaActual.getMonth()]);
console.log(fechaActual.getDate()); // Devuelve el día del mes
console.log(fechaActual.getDay()); // Devuelve el día de la semana (indexado a cero comenzando en domingo)
console.log(fechaActual.getHours()); // Devuelve las horas
console.log(fechaActual.getMinutes()); // Devuelve las minutos
console.log(fechaActual.getSeconds()); // Devuelve las segundos
console.log(fechaActual.getMilliseconds()); // Devuelve las milisegundos

const diasSemana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sabado'
]

function getMarcaTiempo() {
    let diaSemana = diasSemana[new Date().getDay()];
    let dd = new Date().getDate();
    let MM = meses[new Date().getMonth()];
    let yyyy = new Date().getFullYear();
    let hh = ('0' + new Date().getHours()).slice(-2);
    let mm = ('0' + new Date().getMinutes()).slice(-2);
    let ss = ('0' + new Date().getSeconds()).slice(-2);

    return `${diaSemana}, ${dd} de ${MM} de ${yyyy} a las ${hh}:${mm}:${ss}`;
}

let marcaFecha = getMarcaTiempo();
console.log(marcaFecha);

// Cálculo de fechas utilizando Date

console.log(fechaActual.getTime()); // Devuelve los milisegundos desde Epoch

// Fecha dentro de 3 días

let fechaSalida = new Date(fechaActual.getTime() + 3 * 24 * 60 * 60 * 1000); // Dentro de 3 días
console.log(fechaSalida);