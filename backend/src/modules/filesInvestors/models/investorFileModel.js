const { createConnection } = require('../../../config/db');
const uploadFileM = async (fileData) => {
    const connection = await createConnection();
    const query = `
      INSERT INTO files_cobre_del_mayo (file_name, file_path, file_type, category, quarter, year, author, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await connection.execute(query, [
      fileData.file_name,
      fileData.file_path,
      fileData.file_type,
      fileData.category,
      fileData.quarter,
      fileData.year,
      fileData.author,
      new Date(),
      new Date()
    ]);
    await connection.end();
    return result;
  };
  
  const getFileByIdM = async (file_id) => {
    const connection = await createConnection();
    const query = 'SELECT * FROM files_cobre_del_mayo WHERE id = ?';
    const [results] = await connection.execute(query, [file_id]);
    await connection.end();
    return results.length > 0 ? results[0] : null;
  };

  const getFileByInvestor = async (page, limit, investor_email) => {
    const connection = await createConnection();
  
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const offset = (pageNum - 1) * limitNum;
  
    if (isNaN(limitNum) || isNaN(offset)) {
      throw new Error("Limit u offset inválido");
    }
  
    const query = `
      SELECT * FROM files_cobre_del_mayo 
      WHERE author = ? 
      LIMIT ${limitNum} OFFSET ${offset}
    `;
  
    const [results] = await connection.execute(query, [investor_email]);
  
    await connection.end();
    return results.length > 0 ? results : null;
  };
  
  const getFileByNameM = async (file_name) => {
    const connection = await createConnection();
    const query = 'SELECT * FROM files_cobre_del_mayo WHERE file_name LIKE ?';
    const [results] = await connection.execute(query, [`%${file_name}%`]);
    await connection.end();
    return results.length > 0 ? results : null;
  };
  
  const getAllFilesM = async (page, limit) => {
    const connection = await createConnection();
    const offset = (page - 1) * limit;
    const query = `SELECT * FROM files_cobre_del_mayo LIMIT ${limit} OFFSET ${offset}`;
    const [results] = await connection.execute(query);
    await connection.end();
    return results.length > 0 ? results : null;
  };

  const deleteFileM = async (file_id) => {
    const connection = await createConnection();
    const query = 'DELETE FROM files_cobre_del_mayo WHERE id = ?';
    const [result] = await connection.execute(query, [file_id]);
    await connection.end();
    return result;
  }


  
  module.exports = {
    uploadFileM,
    getFileByIdM,
    getFileByInvestor,
    getFileByNameM,
    getAllFilesM,
    deleteFileM
  };