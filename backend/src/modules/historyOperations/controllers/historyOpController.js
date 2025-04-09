const historyOpService = require('../services/historyOpService');

exports.createHistoryOp = async (req, res) => {
    const { title, description, language } = req.body;

    if (!title || !description || !language) {
        return res.status(400).json({
            status: 400,
            message: 'All fields are required',
            data: []
        });
    }

    try {
        const historyOpData = {
            description: title,
            details: description,
            language
        };

        const result = await historyOpService.createHistoryOp(historyOpData);
        res.status(200).json({
            status: 200,
            message: 'History Operation created successfully',
            data: result
        });
    } catch (err) {
        console.log("Create history operation error: ", err);
        res.status(400).json({
            status: 400,
            message: err.message,
            data: []
        });
    }
}
exports.getHistoryOpByLanguage = async (req, res) => {
    const { language } = req.query;

    if (!language) {
        return res.status(400).json({
            status: 400,
            message: 'Language is required',
            data: []
        });
    }

    try {
        const result = await historyOpService.getHistoryOpByLanguage(language);
        if (!result) {
            return res.status(404).json({
                status: 404,
                message: 'History Operation not found',
                data: []
            });
        }
        res.status(200).json({
            status: 200,
            message: 'History Operation retrieved successfully',
            data: result
        });
    } catch (err) {
        console.log("Get history operation by language error: ", err);
        res.status(400).json({
            status: 400,
            message: err.message,
            data: []
        });
    }
}
exports.updateHistoryOp = async (req, res) => {
    const { details, description, language, id } = req.body;

    if (!id || !details || !description || !language) {
        return res.status(400).json({
            status: 400,
            message: 'All fields are required',
            data: []
        });
    }

    try {
        const historyOpData = {
            details,
            description,
            language
        };

        const result = await historyOpService.updateHistoryOp(id, historyOpData);
        res.status(200).json({
            status: 200,
            message: 'History Operation updated successfully',
            data: result
        });
    } catch (err) {
        console.log("Update history operation error: ", err);
        res.status(400).json({
            status: 400,
            message: err.message,
            data: []
        });
    }
}
exports.deleteHistoryOp = async (req, res) => {
    const { historyOpId } = req.query;
    if (!historyOpId) {
        return res.status(400).json({
            status: 400,
            message: 'History Operation ID is required',
            data: []
        });
    }

    try {
        const result = await historyOpService.deleteHistoryOp(historyOpId);
        res.status(200).json({
            status: 200,
            message: 'History Operation deleted successfully',
            data: result
        });
    } catch (err) {
        console.log("Delete history operation error: ", err);
        res.status(400).json({
            status: 400,
            message: err.message,
            data: []
        });
    }
}