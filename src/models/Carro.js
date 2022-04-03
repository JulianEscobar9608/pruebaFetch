const Persona = require('./Persona');

class Carro{

    #marca;
    #color;
    #persona;

    constructor(marca,color){
        this.#marca = marca;
        this.#color = color;
    }

    asignarPersona(persona){
        
        this.#persona = persona;

    }

    getMarca(){
        return this.#marca;
    }

    getColor(){
        return this.#color;
    }

    getPersona(){
        return this.#persona;
    }

}

module.exports = Carro;