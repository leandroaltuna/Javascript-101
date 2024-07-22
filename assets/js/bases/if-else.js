
let a = 8;

if ( a >= 10 ) {
    console.log( 'A es mayor o igual a 10' );
} else {
    console.log( 'A es menor a 10' );
}

// console.log( 'Fin del programa' );

const hoy = new Date();
let dia = hoy.getDay();

console.log({ dia });

if ( dia === 0 ) {
    console.log( 'Domingo' );
} else {
    
    // if ( dia === 1 ) {
    //     console.log( 'Lunes' );
    // } else {
    //     console.log( 'No es Lunes ni Domingo' );
    // }

}

const diaLetras = {
    0: () => 'Domingo - 0',
    1: () => 'Lunes - 1',
    2: () => 'Martes - 2',
    3: () => 'Miercoles - 3',
    4: () => 'Jueves - 4',
    5: () => 'Viernes - 5',
    6: () => 'Sabado - 6',
};

// console.log( diaLetras[dia] || 'Dia no definido' );
console.log( diaLetras[dia]() );