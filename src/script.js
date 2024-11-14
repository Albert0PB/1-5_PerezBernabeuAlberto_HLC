/*
Crea una clase LindoGatito con las siguientes características.  Cada gato tendrá:

    un nombre
    una fecha de nacimiento
    una raza 
    un peso (1-15). 
    El comportamiento es el siguiente:
        Cuando el gato juega pierde peso
        Cuando el gato come gana peso
        El gato puede morir de inanición o por sobrepeso
        Usa excepciones donde sean necesarias (crear un gato con peso inadecuado...).

Crea dos objetos de estas clases e intenta acceder a sus atributos. ¿Están visibles? ¿Hay alguno privado? 
Realiza esta lectura y encapsula/privatiza los métodos y atributos en la medida de lo posible de las clases entregadas 
Los getters y los setters se añadieron en ECMAScript 5. Haz uso de ellos en una clase original diseñada por ti.
*/
{
    class LindoGatito {

        #pesoMinimo = 1;
        #pesoMaximo = 15;
        #razas = [
            "gato común", "siamés", "abisino", "persa", "sphynx", "burmés", "british shorthair", "scottish fold",
            "siberiano", "curl americano", "oriental", "cartujo", "munchkin", "egipcio", "bobtail japonés"
        ];


        constructor( nombre, raza, peso ) {
            this._nombre = nombre;
            this._fechaNacimiento = new Date();
            this._estaVivo = true;

            if( typeof(peso) === "number" && this.#pesoMinimo <= peso <= this.#pesoMaximo ) this._peso = peso;
            else throw new Error("El peso indicado es erróneo. Debe ser un entero entre 1 y 15 (inclusive).");

            if( this.#razas.includes(raza) ) this._raza = raza;
            else throw new Error("La raza indicada no existe.");
        }

        get nombre() {
            return this._nombre;
        }

        set nombre( valor ) {
            if( typeof(valor) === "string" ) this._nombre = valor;
            else throw new Error("El nombre del gato debe ser una cadena de texto.");
        }

        get peso() {
            return this._peso;
        }

        get raza() {
            return this._raza;
        }

        juega() {
            if( this._estaVivo ) {
                this._peso -= 1;
                console.log(`¡${this._nombre} juega!`);
                this.#comprobarPeso();
            }
            else {
                console.log(`Tristemente ${this._nombre} ya no puede jugar más...`)
            }
        }

        come() {
            if( this._estaVivo ) {
                this._peso += 1;
                console.log(`${this._nombre} come.`); 
                this.#comprobarPeso();
            }
            else {
                console.log(`Tristemente ${this._nombre} ya no puede comer más...`)
            }
        }

        #comprobarPeso() {
            if( this._peso < this.#pesoMinimo ) console.log("El gatito murió de inanición.");
            else if( this._peso > this.#pesoMaximo ) console.log("El gatito murió por sobrepeso.");
            if( ! this.#pesoMinimo <= this._peso <= this.#pesoMaximo ) this._estaVivo = false;
        }
    }

    gatito1 = new LindoGatito("Lezo", "gato común", 5);
    gatito1.juega();
    gatito1.come();
    console.log(gatito1.peso);
    try{
        gatito2 = new LindoGatito("Ámbar", "gato exótico", 23);
    }
    catch( excepcion ){
        console.log(excepcion)
    }
}