
const express = require('express');
const app = express();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));;
const personaRoutes = require('./src/routes/personasRoutes');
const Carro = require('./src/models/Carro');
const Empleado = require('./src/models/Empleado');



let empleado1  = new Empleado("Andres","Chitiva",25);
console.log(empleado1.getNombre());
let carro1 = new Carro('Mazda',"Negro");
let carro2 = new Carro("Nissan","Verde");
/* carro1.asignarPersona(persona1.getNombre(),persona1.getApellido(),persona1.getEdad());
carro2.asignarPersona(persona1.getNombre(),persona1.getApellido(),persona1.getEdad());
persona1.addCar(carro1);
persona1.addCar(carro2);
persona1.printCars();

console.log(persona1.searchCar('Mazda'));
console.log(persona1.searchCar('Nissan'));
console.log(persona1.searchCar('citroen'));

console.log(persona1.getCarrosByclass());
 */



app.set('view engine','ejs');

app.get('/',async (req,res)=>{
    const f = await fetch('https://swapi.dev/api/people/1');
    const data = await f.json();
    res.render('carrosFetch',{data});
}); 

app.get('/carrosClass',(req,res)=>{
    res.render('carrosClass',{carros : persona1.getCarrosByclass()});
}); 



app.listen(process.env.PORT || 4000,()=>{
    console.log("Se escucha el puerto");
})