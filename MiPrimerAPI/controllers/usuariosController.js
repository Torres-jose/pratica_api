const crearUsuario = (req, res) =>{
    const {nombre} = req.body;
    res.json({mensaje: `Usuario ${nombre} creado correctamente (desde controlador)`});
};

const obtenerSaludos = (req, res) =>{
    res.json({mensaje: 'Hola desde controlador'});
};

module.exports = {
    crearUsuario,
    obtenerSaludos
};