
function saludar( nombre ) {
    console.log( arguments );
    console.log( 'Hola ' + nombre );

    return 1;
}

const saludar2 = function() {
    console.log( 'Hola Mundo' );
}

const saludarFlecha = () => {
    console.log( 'Hola Flecha' );
}

const saludarFlecha2 = ( nombre ) => {
    console.log( 'Hola Flecha '  + nombre );
}


// const retornoDeSaludar = saludar( 'Leandro', 40, true, 'Costa Rica' );
// console.log({ retornoDeSaludar });
// saludar2();
// saludarFlecha();
// saludarFlecha2( 'Jhonatan' );

function sumar( a, b ) {
    return a + b;
}

// const sumar2 = ( a, b ) => {
//     return a + b;
// }
const sumar2 = ( a, b ) =>  a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random(); 

console.log( getAleatorio2() );
