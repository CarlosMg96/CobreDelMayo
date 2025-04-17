const {
    uploadFileM,
    getFileByIdM,
    getFileByNameM,
    getAllFilesM,
    deleteFileM,
    getFileByInvestor
  } = require('../models/investorFileModel');

  const uploadFileS = async (fileData) => {
    return await uploadFileM(fileData);
  };
  
  const getFileByIdS = async (id) => {
    return await getFileByIdM(id);
  };
  
  const getFileByNameS = async (name) => {
    return await getFileByNameM(name);
  };
  
  const getAllFilesS = async (page = 1, limit = 10) => {
    return await getAllFilesM(page, limit);
  };

  const deleteFileS = async (file_id) => {
    return await deleteFileM(file_id);
  }

  const getFileByInvestorS = async (page, limit, investor_email) => {
    return await getFileByInvestor(page, limit, investor_email);
  }
  
  module.exports = {
    uploadFileS,
    getFileByIdS,
    getFileByNameS,
    getAllFilesS,
    deleteFileS,
    getFileByInvestorS
  };