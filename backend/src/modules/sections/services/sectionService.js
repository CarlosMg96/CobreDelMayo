const sectionModel = require('../models/sectionModel');

const createSection = async (sectionData) => {
    const result = await sectionModel.createSectionM(sectionData);
    return result;
}

const getSectionByPageandLanguaje = async (page, language) => {
    const result = await sectionModel.getSectionByPageandLanguaje(page, language);
    return result;
}
const updateSection = async (section_id, description) => {
    const result = await sectionModel.updateSectionM(section_id, description);
    return result;
}

module.exports = {
    createSection,
    getSectionByPageandLanguaje,
    updateSection
}