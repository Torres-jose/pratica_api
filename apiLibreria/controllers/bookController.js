const {leeLibros, guardarLibro} = require('../models/bookModel');

const obtenerLibros = (req, res)=>{
    res.json(leeLibros());
}
const obtenerLibrosPorId= (req, res) => {
    const Libros = leeLibros();
    const Libro = Libros.find(lisb => lisb.id === parseInt(req.params.id));
    if(!Libro) return res.status(404).json({error: "Libro no encontrado"});
    res.json(libro);
};

const crearLibro = (req, res) => {
    const Libros = leeLibros();
    const {titulo, autor, year} = req.body;

    const nuevoLibro = {
        id: Libros.length ? libros[libros.length -1].id +1 : 1,
        titulo,
        autor,
        year,
    };

    libros.push(nuevoLibro);
    guardarLibro(libros);
    res.status(201).json(nuevoLibro);

};

const actulizarLibro = (req, res) =>{
    const libros = leeLibros();
    const index = libros.findIndex ( leb => leb.id === parseInt(req.params.id));

    if(index === -1) return res.status(404).json({error: 'Libro no encontrado'});
    libros[index] = {...libros[index], ...req.body};
    guardarLibro(libros);
    res.json({mensaje:'libro actulizado', libro: libros[index]});
};

const eliminarLibro = (req, res) => {
    const libros = leeLibros();
    const index = libros.findIndex(leb => leb.id === parseInt(req.params.id));

    if(index === -1) return res.status(404).json({error:'Libro no encontrado'});
    const libroEliminado = libros.splice(index, 1);
    guardarLibro(libros);
    res.json({mensaje: 'libro eliminado', libro: libroEliminado[0]});
};

module .exports ={
    obtenerLibros,
    obtenerLibrosPorId,
    crearLibro,
    eliminarLibro,
    actulizarLibro,
};