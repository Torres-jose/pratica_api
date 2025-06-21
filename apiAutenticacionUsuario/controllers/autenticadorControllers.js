/*
API de Autenticación de Usuarios
Construye una API en Express.js para autenticar usuarios. El sistema debe:
- Registrar usuarios con email y password en memoria (POST /auth/register)
- Iniciar sesión validando credenciales (POST /auth/login)
- Manejar errores de registro (email duplicado) y login (credenciales inválidas)
- Validar formato de email y longitud mínima de password 
*/
const {leerUsuario, guardarUsuario}= require('../models/autenticadorModels');

