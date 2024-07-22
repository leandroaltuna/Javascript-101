

const regresaTrue = () => {

    console.log( 'Regresa True' );
    return true;

}

const regresaFalse = () => {

    console.log( 'Regresa False' );
    return false;

}

console.warn( 'Not o la negacion' );
console.log( true ); //true
console.log( !true ); //false
console.log( !false ); //true

console.log( !regresaFalse() ); //true


console.warn( 'And' ) // true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && false ); // false
console.log( true && !false ); // true
console.log( '===============' );
console.log( regresaFalse() && regresaTrue() ); // false. Al encontrar falso ignora el resto de la condicion.
console.log( regresaTrue() && regresaFalse() ); // false. Ejecuta toda la condicion hasta encontrar falso.

console.log( '4 condiciones ', true && true && true && false ); //false


console.warn( 'OR' );
console.log( true || false ); // true
console.log( false || false ); // false

console.log( regresaTrue() || regresaFalse() );// true. Al encontrar true ignora el resto de la condicion.

console.log( '4 condiciones ', true || true || true || false ); //true


console.log( 'Asignaciones' );
const soyUndefined = undefined;
const soyNull      = null;
const soyFalso     = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({ a1, a2, a3, a4, a5 });