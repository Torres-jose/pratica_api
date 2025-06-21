/*
API de Autenticación de Usuarios
Construye una API en Express.js para autenticar usuarios. El sistema debe:
- Registrar usuarios con email y password en memoria (POST /auth/register)
- Iniciar sesión validando credenciales (POST /auth/login)
- Manejar errores de registro (email duplicado) y login (credenciales inválidas)
- Validar formato de email y longitud mínima de password 
*/

const fs = require('fs');
const path = require('path');


const rutaArchivo = path.join(__dirname, '../data/bdUsuario.json');

const leerUsuario = () => {
    const data = fs.readFileSync(rutaArchivo, 'utf8');
    return JSON.parse(data);
};

const guardarUsuario = (usuario) =>{
    fs.writeFileSync(rutaArchivo, JSON.stringify(usuario, null , 2));
}; 

module.exports = {
    leerUsuario, guardarUsuario
}