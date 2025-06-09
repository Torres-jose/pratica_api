const express = require('express');
const router = express.Router();

const{
    obtenerLibros,
    obtenerLibrosPorId,
    crearLibro,
    actulizarLibro,
    eliminarLibro
} = require('../controllers/bookController');

const validarLibro = require('../middlewares/validarLibro');

router.get('/',obtenerLibros);
router.get('/:id',obtenerLibrosPorId);
router.post('/', validarLibro,crearLibro);
router.put('/:id',validarLibro,actulizarLibro);
router.delete('/:id', eliminarLibro);

module.exports = router;