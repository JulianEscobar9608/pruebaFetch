
class Persona{

	#nombre; 
	#apellido;
	#edad;
	#carros;

	constructor(nombre,apellido,edad){
		this.#nombre = nombre;
		this.#apellido = apellido;
		this.#edad = edad;
		this.#carros = [];
	}

	

	getNombre(){
		return this.#nombre;
	}

	getEdad(){
		return this.#edad;
	}

	getApellido(){
		return this.#apellido;
	}
	
	setNombre(nombre){
		this.#nombre = nombre;
	}

	imprimir(){
		const persona = {
			nombre: this.#nombre,
			apellido: this.#apellido,
			edad: this.#edad
		}
		console.log(persona);
	}

	getObject(){
		const persona = {
			nombre: this.#nombre,
			apellido: this.#apellido,
			edad: this.#edad
		}
		return persona;
	}
	
}


module.exports = Persona;