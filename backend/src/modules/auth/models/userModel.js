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
const getUsersWithPaginationFrontera = async (page, size) => {
    const offset = (page - 1) * size;
    const connection = await createConnection();
    
    try {
        const query = `
            SELECT id, fullname, email, role, area, status, created_at, updated_at 
            FROM users
            LIMIT ${Number(size)} OFFSET ${Number(offset)}`;
        
        const [results] = await connection.execute(query);

        const totalElementsQuery = 'SELECT COUNT(*) AS total FROM users WHERE area = "FRONTERA"';
        const [totalResult] = await connection.execute(totalElementsQuery);
        const totalElements = totalResult[0].total;

        return { results, totalElements };
    } catch (error) {
        console.error('Error fetching users with pagination:', error);
        throw error; 
    } finally {
        await connection.end();  
    }
};


const updatedUserFronteraM = async (data) => {
   try{
    const connection = await createConnection();
    const query = 'UPDATE users SET fullname = ?, email = ?, role = ?, area = ?, password = ? WHERE id = ?';
    await connection.execute(query, [data.fullname, data.email, data.role, data.area, data.password, data.id]);
    await connection.end();
   }catch(err){
    console.error('Error updating user:', err);
    throw new Error('Error updating user');
   }
}

const deleteUserFronteraM = async (data) => {
    const connection = await createConnection();
    const changeStatus = data.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
    const query = 'UPDATE users SET status = ? WHERE id = ?';
    await connection.execute(query, [changeStatus, data.id]);
    await connection.end();
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    getUsersWithPaginationFrontera,
    deleteUserFronteraM,
    updatedUserFronteraM
};
