//simulacion de base de datos con un arreglo
let usuarios = [
    {id: 1, nombre: "Carlos"},
    {id: 2, nombre: "Ana"},
];

//obtener todos lo usuario

const obtenerUsuarios = (req, res) =>{
    res.json(usuarios);
};

//crea nuevo usuario
const creaUsuario = (req, res) => {
    const {nombre} = req.body; // extra del cuerpo de url el valor de la variable 

    //validacion de usuario si es un null, undefined o cadena vacia "" lo que retorna 400
    if(!nombre){
        return res.status(400).json({error: "El es obligatorio"});
    }

    //creamo un nuevo arreglo con los datos del usuario nuevo y usamos length para saber el largo del arreglo
    //y determinar el ultimo id

    const nuevoUsuario ={
        id: usuarios.length + 1,
        nombre
    };

    //con push lo agregamos a lo ultimo de nuestro areglo original.
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);

};

//obtener usuario por el ID
const obtenerUsuarioPorId = (req, res) =>{
    const {id} = req.params;

    //aqui buscamos el usuario por su id
    const usuario = usuarios.find(user => user.id === parseInt(id));

    //validar si no encuentra a el usuario
    if(!usuario){
        return res.status(404).json({error:"Usuario no encontrado"});
    }

    // si todo bien devuelbe el usuario encontra como un areglo json
    res.json(usuario);
}

//elimiar el usuario por el Id
const eliminarUsuario = (req, res)=>{
    const {id} = req.params;
    const index = usuarios.findIndex(user => user.id === parseInt(id));

    if(index === -1){
        return res.status(404).json({error: "Usuario no encontrado"});
    }

    const usuarioElimino = usuarios.splice(index, 1);
    res.json({mensaje: "Usuario eliminado", usuario: usuarioElimino[0] });
};

//para actulizar un usario por id
const actulizarUsuario = (req, res) =>{
    const {id} = req.params;
    const {nombre} = req.body;

    const usuario = usuarios.find(user => user.id === parseInt(id))

    if(!usuario){
        return res.status(404).json({ error: "Usuario no encontrado"});
    }
    if(!nombre){
        return res.status(400).json({error: "El nombre es obligatorio para actulizar"});
    }

    usuario.nombre = nombre;

    res.json({mensaje: " Usuario actulizado correctamente", usuario});
}

module.exports = {
    obtenerUsuarios,
    creaUsuario,
    obtenerUsuarioPorId,
    eliminarUsuario,
    actulizarUsuario
}