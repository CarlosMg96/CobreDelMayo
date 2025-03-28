const userService = require('../services/userService');

exports.register = async (req, res) => {
    const { fullname, email, password, role, area } = req.body;

    if (!fullname || !email || !password || !role) {
        return res.status(400).json({
            status: 400,
            message: 'All fields are required',
            data: []
        });
    }

    try {
        await userService.registerUser(fullname, email, password, role, area);
        res.status(200).json({
            status: 200,
            message: 'User registered successfully',
            data: []
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
            data: []
        });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            status: 400,
            message: 'Email and password are required',
            data: []
        });
    }

    try {
        userService.validateEmailAndPassword(email, password);
        const token = await userService.loginUser(email, password);

        res.status(200).json({
            status: 200,
            message: "Success",
            data: { token: token }
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
            data: []
        });
    }
};

exports.me = async (req, res) => {
    try {
        const user = await userService.getUserProfile(req.userId);
        res.status(200).json({
            status: 200,
            message: 'Success',
            data: user
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: 'Server error',
            data: []
        });
    }
};

exports.get_users = async (req, res) => {
    const { page = 1, size = 10 } = req.query;

    try {
        const users = await userService.getUsers(page, size);
        res.status(200).json({
            status: 200,
            message: "Success",
            data: users
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: 'Server error',
            data: []
        });
    }
};
