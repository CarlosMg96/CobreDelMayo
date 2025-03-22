const express = require('express');
const router = express.Router();
const authController = require('../modules/auth/controllers/userController');
const verifyToken = require('../middlewares/verifyToken');
const checkRole = require('../middlewares/checkRole');

router.get('/hello', (req, res) => {
    res.send('Hola Mundo mis servicios si funcionan');
  });

// Definir las rutas correctamente
router.post('/register', checkRole(['MASTER', 'SUPERADMIN']), authController.register);
router.post('/login', authController.login);
router.get('/me', verifyToken, authController.me);
router.get('/users', verifyToken, checkRole(['MASTER', 'SUPERADMIN']), authController.get_users);

module.exports = router;
