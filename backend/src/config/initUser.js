const bcrypt = require('bcryptjs');

const keys = {
    userEmail: process.env.INIT_USER_EMAIL,
    userPassword: process.env.INIT_USER_PASS,
    dbName: process.env.DB_NAME
}

// Función para crear la base de datos si no existe
const createDatabaseIfNotExists = async (connection) => {
  try {
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${keys.dbName}`);
    console.log('Base de datos creada exitosamente o ya existente.');
    await createTableUsers(connection); // Llama a la función para crear la tabla users
  } catch (err) {
    console.error('Error al crear la base de datos:', err);
  }
};

// Función para crear la tabla users si no existe
const createTableUsers = async (connection) => {
  try {
    await connection.query(`USE ${keys.dbName}`);
    console.log('Base de datos seleccionada.');

    await connection.query(`CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      fullname VARCHAR(100) NOT NULL,
      email VARCHAR(70) NOT NULL UNIQUE,
      password VARCHAR(100) NOT NULL,
      remember_token VARCHAR(100),
      role ENUM( 'SUPERADMIN', 'ADMIN', 'INVESTORS') NOT NULL,
      area ENUM('COBRE', 'FRONTERA', 'NA') NOT NULL,
      status ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED') DEFAULT 'ACTIVE',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`);
    console.log('Tabla users creada exitosamente o ya existente.');
    await createDefaultUser(connection); // Llama a la función para crear el usuario por defecto
  } catch (err) {
    console.error('Error al crear la tabla users:', err);
  }
};

// Función para crear un usuario por defecto
const createDefaultUser = async (connection) => {
    try {
      // Verificar si el usuario ya existe
      const [existingUsers] = await connection.execute('SELECT * FROM users WHERE email = ?', [keys.userEmail]);
  
      if (existingUsers.length > 0) {
        console.log('El usuario ya existe.');
        return;
      }
  

      // Encriptar las contraseñas
      const hashedPassword = bcrypt.hashSync(keys.userPassword, 8);
  
      // Crear el usuario si no existe
      await connection.execute(
        'INSERT INTO users (fullname, email, password, role, area) VALUES (?, ?, ?, ?, ?)',
        ['Eve Dev', keys.userEmail, hashedPassword, 'SUPERADMIN', 'FRONTERA']
      );
      console.log('Usuario por defecto creado exitosamente.');
    } catch (err) {
      console.error('Error al crear el usuario por defecto:', err);
    }
  };


module.exports = { createDatabaseIfNotExists}
