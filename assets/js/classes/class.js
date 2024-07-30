

class Persona {

    static _conteo = 0;
    static get getConteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre ); // undefined
        console.log( 'Hola soy un metodo estatico' );
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;

    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }

    quienSoy() {
        console.log( `Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        this.quienSoy();
        console.log( `${ this.codigo } dice: ${ this.frase }` );
    }

}

const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman' );
const iroman = new Persona( 'Tony Stark', 'Iroman', 'Yo soy iroman' );
// console.log( iroman );

// spiderman.miFrase();
// iroman.miFrase();

spiderman.setComidaFavorita = 'El pie de ceraza de la tia May';

// console.log( spiderman.getComidaFavorita );
// console.log( spiderman );

console.log( 'Conteo estatico', Persona._conteo );
console.log( Persona.getConteo );
Persona.mensaje();