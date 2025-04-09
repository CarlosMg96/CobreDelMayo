const express = require('express');
const router = express.Router();
const authController = require('../modules/auth/controllers/userController');
const verifyToken = require('../middlewares/verifyToken');
const checkRole = require('../middlewares/checkRole');

router.get('/hello', (req, res) => {
    res.send('Hola Mundo mis servicios si funcionan');
  });

// Definir las rutas correctamente
router.post('/register-user-cobre-frontera', verifyToken, checkRole([ 'SUPERADMIN']), authController.register);
router.post('/login', authController.login);
router.get('/me', verifyToken, authController.me);
router.get('/users-frontera', verifyToken, checkRole([ 'SUPERADMIN']), authController.get_users_frontera);
router.put('/update-user-frontera', verifyToken, checkRole([ 'SUPERADMIN']), authController.update_user_frontera);
router.delete('/delete-user-frontera', verifyToken, checkRole([ 'SUPERADMIN']), authController.delete_user_frontera);

module.exports = router;
