const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const keysTokens = {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN
}

// Validación de contraseñas y correo electrónico
const validateEmailAndPassword = (email, password) => {
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PasswordRegex = /^(?=.*\d)[A-Za-z\dÑñ@_-]{6,}$/;

    if (!EmailRegex.test(email)) {
        throw new Error('Email is not accepted');
    }

    if (!PasswordRegex.test(password)) {
        throw new Error('Password is not accepted');
    }
};

// Registrar un usuario
const registerUser = async (fullname, email, password, role, area) => {
    const hashedPassword = bcrypt.hashSync(password, 8);
    await userModel.createUser(fullname, email, hashedPassword, role, area);
};

// Iniciar sesión
const loginUser = async (email, password) => {
    const user = await userModel.getUserByEmail(email);
    if (!user) {
        throw new Error('User not found');
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
        throw new Error('Invalid password');
    }

    const token = jwt.sign({ id: user.id, role: user.role, area: user.area, status: user.status, fullname: user.fullname, email: user.email }, keysTokens.secret, { expiresIn: keysTokens.expiresIn });
    return token;
};

// Obtener usuario por ID
const getUserProfile = async (userId) => {
    const user = await userModel.getUserById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

// Obtener lista de usuarios con paginación
const getUsersFrontera = async (page, size) => {
    const { results, totalElements } = await userModel.getUsersWithPaginationFrontera(page, size);
    return { content: results, totalElements };
};

const updatedUserFronteraS = async (data) => {
    const result = await userModel.updatedUserFronteraM(data);
    return result;
}

const deleteUserFronteraS = async (userId) => {
    const result = await userModel.deleteUserFronteraM(userId);
    return result;
}

module.exports = {
    validateEmailAndPassword,
    registerUser,
    loginUser,
    getUserProfile,
    getUsersFrontera,
    updatedUserFronteraS,
    deleteUserFronteraS
};
