const express = require('express');
const router = express.Router();

const{ 
obtenerTarea,
obtenerTareaCompleta,
crearTarea
} = require('../controllers/tareaControllers');

const validarTarea = require('../middleware/validadTarea');

router.get('/',obtenerTarea);
router.get('/:completa',obtenerTareaCompleta);
router.post('/',validarTarea,crearTarea);

module.exports = router;