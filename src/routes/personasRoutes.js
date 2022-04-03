
const express = require('express');
const personaRoutes = express.Router();
const personaController = require('../controllers/personaController');

personaRoutes.get('/fer',personaController.indexPage);


module.exports = personaRoutes; 