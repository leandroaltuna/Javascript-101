
// function crearPersona( nombre, apellido ) {
    
//     return {
//         nombre,
//         apellido,
//     }

// }

const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });

const persona = crearPersona( 'Leandro', 'Altuna' );
console.log( persona );

function imprimirArguments() {
    console.log( arguments );
}

const imprimirArguments2 = ( edad, ...args ) => {
    // console.log({ edad, args });
    return args;
}

// imprimirArguments2( 10, true, false, 'Leandro', 'Hola' );

// const argumentos = imprimirArguments2( 10, true, false, 'Leandro', 'Hola' );
// console.log({ argumentos });

const [ casado, vivo, nombre, saludo ] = imprimirArguments2( 10, true, false, 'Leandro', 'Hola' );
console.log({ casado, vivo, nombre, saludo });


const { apellido: nuevoApellido } = crearPersona( 'Leandro', 'Altuna' );
console.log({ nuevoApellido });


let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    // edad: 40,
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ],
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });

}

imprimePropiedades( tony );