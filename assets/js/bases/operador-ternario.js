

const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto, Esta cerrado, hoy abrimos a las XX

// if ( dia === 0 || dia === 9 ) {
// if ( [0,6].includes( dia ) ) {
//     console.log( 'Fin de semana' );
//     horaApertura = 9;

// } else {

//     console.log( 'Dia de la semana' );
//     horaApertura = 11;

// }

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;


// if ( horaActual >= horaApertura ) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura }`;
// }

mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${ horaApertura }`;

console.log({ horaApertura, mensaje });