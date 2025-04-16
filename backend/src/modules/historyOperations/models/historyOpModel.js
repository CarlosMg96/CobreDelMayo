const { createConnection } = require('../../../config/db');

const createHistoryOpM = async (historyOpData) => {
    const connection = await createConnection();
    const query = 'INSERT INTO history_operations_frontera (description, details, language, created_at, updated_at) VALUES (?, ?, ?, ?, ?)';
    const [result] = await connection.execute(query, [historyOpData.description, historyOpData.details, historyOpData.language, new Date(), new Date()]);
    await connection.end();
    return result;
}

const getHistoryOpByLanguage = async (language) => {
    const connection = await createConnection();
    const query = 'SELECT * FROM history_operations_frontera WHERE language = ?';
    const [results] = await connection.execute(query, [language]);
    await connection.end();
    return results.length > 0 ? results : null;
}

const updateHistoryOpM = async (historyOp_id, data) => {
    const connection = await createConnection();
    const query = 'UPDATE history_operations_frontera SET description = ?, details = ?, language = ?, updated_at = ? WHERE id = ?';
    await connection.execute(query, [data.description, data.details, data.language,  new Date(), historyOp_id]);
    await connection.end();
}

const deleteHistoryOpM = async (historyOp_id) => {
    const connection = await createConnection();
    const query = 'DELETE FROM history_operations_frontera WHERE id = ?';
    await connection.execute(query, [historyOp_id]);
    await connection.end();
}

module.exports = {
    createHistoryOpM,
    getHistoryOpByLanguage,
    updateHistoryOpM,
    deleteHistoryOpM
}