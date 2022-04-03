
const Persona = require('../models/Persona');

class personaController {

    static indexPage(req, res){
        res.render('indexNew');
    }


    static allPersons(req, res) {

        const per1 = new Persona("Andres", "Perez", 22);
        per1.imprimir();
        let g = 22544;
        res.send(g)


    }


}

module.exports = personaController;