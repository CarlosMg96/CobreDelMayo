const { createConnection } = require('../../../config/db');

const createHistoryOpM = async (historyOpData) => {
    const connection = await createConnection();
    const query = 'INSERT INTO history_operations_frontera (description, details, language, created_at, updated_at) VALUES (?, ?, ?, ?, ?)';
    const [result] = await connection.execute(query, [historyOpData.descriprion, historyOpData.detaild, historyOpData.language, new Date(), new Date()]);
    await connection.end();
    return result.insertId;
}

const getHistoryOpByLanguage = async (language) => {
    const connection = await createConnection();
    const query = 'SELECT * FROM history_operations_frontera WHERE language = ?';
    const [results] = await connection.execute(query, [language]);
    await connection.end();
    return results.length > 0 ? results : null;
}

const updateHistoryOpM = async (historyOp_id, description) => {
    const connection = await createConnection();
    const query = 'UPDATE history_operations_frontera SET description = ?, updated_at = ? WHERE historyOp_id = ?';
    await connection.execute(query, [description, new Date(), historyOp_id]);
    await connection.end();
}

const deleteHistoryOpM = async (historyOp_id) => {
    const connection = await createConnection();
    const query = 'DELETE FROM history_operations_frontera WHERE historyOp_id = ?';
    await connection.execute(query, [historyOp_id]);
    await connection.end();
}

module.exports = {
    createHistoryOpM,
    getHistoryOpByLanguage,
    updateHistoryOpM,
    deleteHistoryOpM
}