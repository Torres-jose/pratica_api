const express = require('express');
const router = express.Router();
const{
    obtenerUsuarioPorId,
    creaUsuario,
    obtenerUsuarios,
    eliminarUsuario,
    actulizarUsuario 
    } = require('../controllers/usuarioController');

    router.get('/usuarios', obtenerUsuarios);
    router.post('/usuarios',creaUsuario);
    router.get('/usuarios/:id', obtenerUsuarioPorId);
    router.delete('/usuarios/:id',eliminarUsuario);
    router.put('/usuarios/:id',actulizarUsuario);

    module.exports = router;