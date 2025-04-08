const esgModel = require('../models/esgModel');

const createEsg = async (esgData) => {
    const result = await esgModel.createEsgM(esgData);
    return result;
}
const getEsgById = async (id) => {
    const result = await esgModel.getEsgByIdM(id);
    return result;
}
const getLastTreeEsg = async (language) => {
    const result = await esgModel.getLastTreeEsgM(language);
    return result;
}
const updateEsg = async (id, esgData) => {
    const result = await esgModel.updateEsgM(id, esgData);
    return result;
}
const deleteEsg = async (data) => {
    const result = await esgModel.deleteEsgM(data);
    return result;
}

const getAllEsg = async (page, size, offset) => {
    const result = await esgModel.getAllEsgM(page, size, offset);
    return result;
}

module.exports = {
    createEsg,
    getEsgById,
    getLastTreeEsg,
    updateEsg,
    deleteEsg,
    getAllEsg
}