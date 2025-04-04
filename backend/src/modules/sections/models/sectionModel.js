const { createConnection } = require('../../../config/db');

const createSectionM = async (sectionData) => {
    const connection = await createConnection();
    const query = 'INSERT INTO content_from_frontera (page, section_id, description, language, created_at, updated_at) VALUES (?, ?, ?, ?, ?)';
    const [result] = await connection.execute(query, [sectionData.page, sectionData.section_id, sectionData.description, sectionData.language, new Date(), new Date()]);
    await connection.end();
    return result.insertId;
}

const getSectionByPageandLanguaje = async (page, language) => {
    const connection = await createConnection();
    const query = 'SELECT * FROM content_from_frontera WHERE page = ? and language = ?';
    const [results] = await connection.execute(query, [page, language]);
    await connection.end();
    return results.length > 0 ? results[0] : null;
}

const updateSectionM = async (section_id, description) => {
    const connection = await createConnection();
    const query = 'UPDATE content_from_frontera SET description = ?, updated_at = ? WHERE section_id = ?';
    await connection.execute(query, [description, new Date(), section_id]);
    await connection.end();
}

module.exports = {
    createSectionM,
    getSectionByPageandLanguaje,
    updateSectionM
}