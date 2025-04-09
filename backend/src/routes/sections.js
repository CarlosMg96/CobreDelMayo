const express = require('express');
const router = express.Router();
const sectionController = require('../modules/sections/controllers/sectionController');
const verifyToken = require('../middlewares/verifyToken');
const checkRole = require('../middlewares/checkRole');

// Definir las rutas correctamente
router.post('/create-section', verifyToken, checkRole([ 'SUPERADMIN', 'ADMIN']), sectionController.createSection);
router.get('/section', sectionController.getSectionByPageandLanguaje);
router.put('/update-section', verifyToken, checkRole([ 'SUPERADMIN', 'ADMIN']), sectionController.updateSection);

module.exports = router;