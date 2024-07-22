
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = { nombre: 'Juan' };
// let ana  = { juan };
let ana  = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });


// const cambiaNombre = ( persona ) => {
//     persona.nombre = 'Tony';
//     return persona;
// }
const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony  = cambiaNombre( peter );

console.log({ peter, tony });

//Arrays
const frutas = [ 'Manzana', 'Pera', 'Piña' ];
// const otrasFrutas = frutas;
// const otrasFrutas = [ ...frutas ];
// const otrasFrutas = frutas.slice();

console.time('Slice');
const otrasFrutas = frutas.slice();
console.timeEnd('Slice');

console.time('spread');
const otrasFrutas2 = [ ...frutas ];
console.timeEnd('spread');

otrasFrutas.push( 'Mango' );
console.table({ frutas, otrasFrutas });