require('dotenv').config();
const mysql = require('mysql2/promise');

const keys = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

// Función para crear la conexión a la base de datos
const createConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: keys.host,
      user: keys.user,
      password: keys.password,
      database: keys.database,
      namedPlaceholders: true,
      supportBigNumbers: true,
      bigNumberStrings: true,
      dateStrings: true
    });
    return connection;
  } catch (err) {
    console.error('Error connecting to the database:', err);
    console.error('Environment variables:', {
      MYSQL_HOST: keys.host,
      MYSQL_USER: keys.user,
      MYSQL_DB: keys.database
    });
    process.exit(1);
  }
};
module.exports = { createConnection };
