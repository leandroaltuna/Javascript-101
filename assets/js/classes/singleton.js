

class SingletonExample {

    static instancia; // undefined

    nombre = '';

    constructor( nombre = '' ) {

        // console.log( SingletonExample.instancia );

        // const a = undefined;
        // console.log( a );
        // console.log( !a );
        // console.log( !!a );

        if ( !!SingletonExample.instancia ) { 
        // Doble negacion. Valida si la instancia ya existe entonces pasa la validacion. La doble negación se utiliza para convertir un valor a su equivalente booleano. La primera negación convierte el valor a su negación lógica, y la segunda negación invierte ese resultado, devolviendo el valor original.
            return SingletonExample.instancia;
        }

        SingletonExample.instancia = this;
        this.nombre = nombre;

        // return this; // Este return es opcional ya que por defecto retorna el this.

    }

}

const instancia1 = new SingletonExample( 'Iroman' );
const instancia2 = new SingletonExample( 'Spiderman' );
const instancia3 = new SingletonExample( 'Black Panther' );

console.log( `Nombre en la instancia1 es: ${ instancia1.nombre }` );
console.log( `Nombre en la instancia2 es: ${ instancia2.nombre }` );
console.log( `Nombre en la instancia3 es: ${ instancia3.nombre }` );