const { createConnection } = require('../../../config/db');

// Insertar un nuevo usuario
const createUser = async (fullname, email, password, role, area) => {
    const connection = await createConnection();
    const query = 'INSERT INTO users (fullname, email, password, role, area) VALUES (?, ?, ?, ?, ?)';
    await connection.execute(query, [fullname, email, password, role, area]);
    await connection.end();
};

// Obtener un usuario por su correo electrónico, sirve para validar si el usuario ya existe
const getUserByEmail = async (email) => {
    const connection = await createConnection();
    const query = 'SELECT * FROM users WHERE email = ?';
    const [results] = await connection.execute(query, [email]);
    await connection.end();
    return results.length > 0 ? results[0] : null;
};

// Obtener un usuario por su ID para obtener su información
const getUserById = async (id) => {
    const connection = await createConnection();
    const query = 'SELECT id, fullname, email, role, area, status, created_at, updated_at FROM users WHERE id = ?';
    const [results] = await connection.execute(query, [id]);
    await connection.end();
    return results.length > 0 ? results[0] : null;
};

// Obtener usuarios con paginación
const getUsersWithPagination = async (page, size) => {
    const offset = (page - 1) * size;
    const connection = await createConnection();
    const query = 'SELECT id, fullname, email, role, area, status, created_at, updated_at FROM users LIMIT ? OFFSET ?';
    const [results] = await connection.execute(query, [Number(size), Number(offset)]);
    
    const totalElementsQuery = 'SELECT COUNT(*) AS total FROM users';
    const [totalResult] = await connection.execute(totalElementsQuery);
    const totalElements = totalResult[0].total;
    await connection.end();
    
    return { results, totalElements };
};

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    getUsersWithPagination
};
