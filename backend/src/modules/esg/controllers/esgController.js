const esgService = require('../services/esgService');

exports.createEsg = async (req, res) => {
    const { title, description, language } = req.body;

    if (!title || !description || !language) {
        return res.status(400).json({
            status: 400,
            message: 'All fields are required',
            data: []
        });
    }

    try {
        const esgData = {
            title,
            description,
            language
        };

        const result = await esgService.createEsg(esgData);
        res.status(200).json({
            status: 200,
            message: 'ESG created successfully',
            data: result
        });
    } catch (err) {
        console.log("Create esg error: ", err);
        res.status(400).json({
            status: 400,
            message: err.message,
            data: []
        });
    }
}
exports.getEsgById = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            status: 400,
            message: 'ID is required',
            data: []
        });
    }

    try {
        const result = await esgService.getEsgById(id);
        if (!result) {
            return res.status(404).json({
                status: 404,
                message: 'ESG not found',
                data: []
            });
        }
        res.status(200).json({
            status: 200,
            message: 'ESG retrieved successfully',
            data: result
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
            data: []
        });
    }
}

exports.getALLEsg = async (req, res) => {
    try {
        const { page = 0, size = 10 } = req.query;
        const offset = page * size;
        const result = await esgService.getAllEsg(page, size, offset);
        const total = result.length;

        res.status(200).json({
            status: 200,
            message: 'ESG retrieved successfully',
            data: {
                content: result,
                totalElements: total,
                page: page,
                size: size
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
            data: []
        });
    }
}

exports.getLastTreeEsg = async (req, res) => {
    const { language } = req.query;
    const languageSelected = language? language : 'en';

    try {
        const result = await esgService.getLastTreeEsg(languageSelected);
        res.status(200).json({
            status: 200,
            message: 'ESG retrieved successfully',
            data: result
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
            data: []
        });
    }
}
exports.updateEsg = async (req, res) => {
    const { id } = req.params;
    const { title, description, language } = req.body;

    if (!id || !title || !description || !language) {
        return res.status(400).json({
            status: 400,
            message: 'All fields are required',
            data: []
        });
    }

    try {
        const esgData = {
            title,
            description,
            language
        };

        await esgService.updateEsg(id, esgData);
        res.status(200).json({
            status: 200,
            message: 'ESG updated successfully',
            data: []
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
            data: []
        });
    }
}
exports.deleteEsg = async (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({
            status: 400,
            message: 'ID is required',
            data: []
        });
    }

    try {
        await esgService.deleteEsg(id);
        res.status(200).json({
            status: 200,
            message: 'ESG deleted successfully',
            data: []
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
            data: []
        });
    }
}