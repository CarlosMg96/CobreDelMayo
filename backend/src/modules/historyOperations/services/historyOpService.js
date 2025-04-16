const historyOpModel = require('../models/historyOpModel');

const createHistoryOp = async (historyOpData) => {
    const result = await historyOpModel.createHistoryOpM(historyOpData);
    return result;
}

const getHistoryOpByLanguage = async (language) => {
    const result = await historyOpModel.getHistoryOpByLanguage(language);
    return result;
}

const updateHistoryOp = async (historyOp_id, historyOpData) => {
    const result = await historyOpModel.updateHistoryOpM(historyOp_id, historyOpData);
    return result;
}

const deleteHistoryOp = async (historyOp_id) => {
    const result = await historyOpModel.deleteHistoryOpM(historyOp_id);
    return result;
}

module.exports = {
    createHistoryOp,
    getHistoryOpByLanguage,
    updateHistoryOp,
    deleteHistoryOp
}