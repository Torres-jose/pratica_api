const express = require('express');
const router = express.Router();
const {crearUsuario,obtenerSaludos}= require('../controllers/usuariosController');

//rustas para conectadas a los controlador

router.get('/saludo',obtenerSaludos);
router.post('/usuario',crearUsuario);

module.exports = router;