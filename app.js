
const express = require('express');
const app = express();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const personaRoutes = require('./src/routes/personasRoutes');
const Carro = require('./src/models/Carro');
const Empleado = require('./src/models/Empleado');



let empleado1  = new Empleado("Andres","Chitiva",25);
console.log(empleado1.getNombre());
let carro1 = new Carro('Mazda',"Negro");
let carro2 = new Carro("Nissan","Verde");

carro1.asignarPersona(empleado1);
carro2.asignarPersona(empleado1);
console.log(carro1.getPersona().getNombre(),carro1.getPersona().getApellido(),carro1.getPersona().getEdad());

empleado1.addCar(carro1);
empleado1.addCar(carro2);
empleado1.printCars();

console.log(empleado1.searchCar('Mazda'));
console.log(empleado1.searchCar('Nissan'));
console.log(empleado1.searchCar('citroen'));

console.log(empleado1.getCarrosByclass());
 



app.set('view engine','ejs');

//FETCH NODEJS

app.get('/',async (req,res)=>{
    const f = await fetch('https://swapi.dev/api/people/1');
    const data = await f.json();
    res.render('carrosFetch',{data});
}); 

app.use('/',personaRoutes);

app.get('/carrosClass',(req,res)=>{
    res.render('carrosClass',{carros : empleado1.getCarrosByclass()});
}); 



app.listen(process.env.PORT || 4000,()=>{
    console.log("Se escucha el puerto");
})