//para poder leer el archivo de configuracion .env necesitamos instalar una libreria "dotenv"
// npm install  --save dotenv

require('dotenv').config(); //Se trae toda la info que esta en el archivo .env y los mueve a las variables de entorno, estas solo existen en el sistema operativo que esta corriendo la app

const config = {
    dev: process.env.NODE_ENV !== "production",
    port: process.env.PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME
  };
  
  module.exports = { config };