const sectionService = require('../services/sectionService');

exports.createSection = async (req, res) => {
    const { page, section_id, description, language } = req.body;

    if (!page || !section_id || !description || !language) {
        return res.status(400).json({
            status: 400,
            message: 'All fields are required',
            data: []
        });
    }

    try {
        const sectionData = {
            page,
            section_id,
            description,
            language
        };

        const result = await sectionService.createSection(sectionData);
        res.status(200).json({
            status: 200,
            message: 'Section created successfully',
            data: result
        });
    } catch (err) {
        console.log("Create section error: ", err);
        res.status(400).json({
            status: 400,
            message: err.message,
            data: []
        });
    }
}

exports.getSectionByPageandLanguaje = async (req, res) => {
    const { page, language } = req.query;
    

    if (!page || !language) {
        return res.status(400).json({
            status: 400,
            message: 'Page and language are required',
            data: []
        });
    }

    try {
        const result = await sectionService.getSectionByPageandLanguaje(page, language);
        if (!result) {
            return res.status(404).json({
                status: 404,
                message: 'Section not found',
                data: []
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Section retrieved successfully',
            data: result
        });
    } catch (err) {
        console.log("Get section error: ", err);
        res.status(400).json({
            status: 400,
            message: err.message,
            data: []
        });
    }
}

exports.updateSection = async (req, res) => {
    const { description, section_id } = req.body;

    if (!section_id || !description) {
        return res.status(400).json({
            status: 400,
            message: 'Section ID and description are required',
            data: []
        });
    }

    try {

        await sectionService.updateSection(section_id, description);
        res.status(200).json({
            status: 200,
            message: 'Section updated successfully',
            data: []
        });
    } catch (err) {
        console.log("Update section error: ", err);
        res.status(400).json({
            status: 400,
            message: err.message,
            data: []
        });
    }
}