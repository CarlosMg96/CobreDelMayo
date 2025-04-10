const path = require('path');
const fs = require('fs');

const {
    uploadFileS,
    getFileByIdS,
    getFileByNameS,
    getAllFilesS,
    deleteFileS
} = require('../services/invertService');

const uploadFileC = async (req, res) => {
    try {
      const file = req.file;
      const { author } = req.body;
      console.log(req);
  
      if (!file || path.extname(file.originalname).toLowerCase() !== '.pdf') {
        return res.status(400).json({ message: 'Solo se permiten archivos PDF' });
      }
  
      const fileData = {
        file_name: file.originalname,
        file_path: `/pdf_investors/${file.filename}`,
        file_type: 'application/pdf',
        author
      };
  
      const result = await uploadFileS(fileData);
      res.status(200).json({ message: 'Archivo subido', data: result });
    } catch (error) {
      console.error('Error al subir el archivo:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
  
  const getAllFilesC = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const files = await getAllFilesS(Number(page), Number(limit));
    res.json(files);
  };
  
  const getFileByIdC = async (req, res) => {
    const { id } = req.params;
    const file = await getFileByIdS(id);
    file ? res.json(file) : res.status(404).json({ message: 'Archivo no encontrado' });
  };
  
  const getFileByNameC = async (req, res) => {
    const { name } = req.params;
    const files = await getFileByNameS(name);
    files ? res.json(files) : res.status(404).json({ message: 'No se encontraron archivos' });
  };

  const deleteFileC = async (req, res) => {
    const { id } = req.query;
    const file = await getFileByIdS(id);
  
    if (!file) {
      return res.status(404).json({ message: 'Archivo no encontrado' });
    }
  
    const filePath = path.join(__dirname, '../../../public/pdf_investors', file.file_path);
  
    fs.unlink(filePath, async (err) => {
      if (err) {
        console.error('Error al eliminar el archivo:', err);
        return res.status(500).json({ message: 'Error interno del servidor' });
      }
  
      await deleteFileS(id);
      res.json({ message: 'Archivo eliminado' });
    });
  }
  
  module.exports = {
    uploadFileC,
    getAllFilesC,
    getFileByIdC,
    getFileByNameC,
    deleteFileC
  };