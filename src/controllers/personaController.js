
const Persona = require('../models/Persona');

class personaController {

    #persona;
    constructor(persona){
        this.#persona = persona;
    }


    static funciones(){ 

        const func = {
            
            index: (req,res)=>{
                res.render('index');
            },   
            allPersons: (req,res)=>{
            
                const per1 = new Persona("Andres","Perez",22);
                per1.imprimir();
                let g = 22544;
                res.send(g)
            } 
        }

        return func;


        
    }
    

}

module.exports = personaController;