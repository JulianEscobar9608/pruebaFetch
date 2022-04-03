
const Persona = require('./Persona');

class Empleado extends Persona{

    #carros;

    constructor(nombre,apellido,edad){
        super(nombre,apellido,edad);
        this.#carros = [];
    }


    addCar(carro){
	
		this.#carros.push(carro); 
	}

	printCars(){
		
		let carros = [];
		this.#carros.forEach(car =>{
			let carro = {
				marca : car.getMarca(),
				color : car.getColor()
			}
			carros.push(carro);

		});
		console.table(carros);
	}

	/* searchCar(nombre){

		let value = "No se encontro carro con la marca "+nombre;
		for(let i = 0;i<this.#carros.length;i++){
			if(this.#carros[i].getMarca() === nombre){
				value = "Se encontro carro con la marca "+nombre+", propiedad de la persona "+this.;
				break;
			}
		}
		return value;

	}
 */
	getCarros(){

		let arrayCarros = [];
		this.#carros.forEach(carro =>{
			let car = {
				marca : carro.getMarca(),
				color : carro.getColor()
			}
			arrayCarros.push(car);
		});

		return arrayCarros;

	}

	getCarrosByclass(){

		return this.#carros;

	}

}

module.exports = Empleado;