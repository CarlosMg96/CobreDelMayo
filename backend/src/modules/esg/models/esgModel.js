const { createConnection } = require('../../../config/db');

const createEsgM = async (esgData) => {
    const connection = await createConnection();
    const query = 'INSERT INTO content_esg_frontera (title, description, language, created_at, updated_at) VALUES (?, ?, ?, ?, ?)';
    const [result] = await connection.execute(query, [esgData.title, esgData.description, esgData.language, new Date(), new Date()]);
    await connection.end();
    return result.insertId;
}

const getEsgByIdM = async (id) => {
    const connection = await createConnection();
    const query = 'SELECT * FROM content_esg_frontera WHERE id = ?';
    const [results] = await connection.execute(query, [id]);
    await connection.end();
    return results.length > 0 ? results[0] : null;
};

const getAllEsgM = async (page, size, offset) => {
    const connection = await createConnection();
    const query = 'SELECT * FROM content_esg_frontera';
    const [results] = await connection.execute(query);
    await connection.end();
    return results;
};

const getLastTreeEsgM = async (selectedLanguage) => {
    const connection = await createConnection();
    const query = 'SELECT * FROM content_esg_frontera where status = "active" and language = ? order by created_at desc limit 3';
    const [results] = await connection.execute(query, selectedLanguage);
    await connection.end();
    return results;
};
const updateEsgM = async (id, esgData) => {
    const connection = await createConnection();
    const query = 'UPDATE content_esg_frontera SET title = ?, description = ?, updated_at = ? WHERE id = ?';
    await connection.execute(query, [esgData.title, esgData.description, new Date(), id]);
    await connection.end();
};
const deleteEsgM = async (data) => {
    const { id, status } = data;
    const connection = await createConnection();
    const query = 'UPDATE content_esg_frontera SET status = ?, updated_at = ? WHERE id = ?';
    await connection.execute(query, [status ,new Date(), id]);
    await connection.end();
};


module.exports = {
    createEsgM,
    getEsgByIdM,
    getAllEsgM,
    getLastTreeEsgM,
    updateEsgM,
    deleteEsgM
}