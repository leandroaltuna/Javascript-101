

class Rectangulo {

    #area = 0; // # sirve para declarar propiedades privadas.

    constructor( base = 0, altura = 0 ) {

        this.base = base;
        this.altura = altura;

        this.#area =  base * altura;

    }

    // Methodos privados aun no aceptados
    #calcularArea() {
        console.log( this.#area * 2 );
    }

}


const rectangulo = new Rectangulo( 10, 15 );

// rectangulo.#area = 100;
rectangulo.calcularArea();

console.log( rectangulo );