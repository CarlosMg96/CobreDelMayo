const express = require('express');
const router = express.Router();
const esgController = require('../modules/esg/controllers/esgController');
const verifyToken = require('../middlewares/verifyToken');
const checkRole = require('../middlewares/checkRole');


// Definir las rutas correctamente
router.post('/create-esg', verifyToken, checkRole(['MASTER', 'SUPERADMIN', 'ADMIN']), esgController.createEsg);
router.get('/esg-id', verifyToken, checkRole(['MASTER', 'SUPERADMIN', 'ADMIN']), esgController.getEsgById);
router.get('/all-esg', verifyToken, checkRole(['MASTER', 'SUPERADMIN', 'ADMIN']), esgController.getALLEsg);
router.get('/last-three-esg', esgController.getLastTreeEsg);
router.put('/update-esg', verifyToken, checkRole(['MASTER', 'SUPERADMIN', 'ADMIN']), esgController.updateEsg);
router.delete('/delete-esg', verifyToken, checkRole(['MASTER', 'SUPERADMIN', 'ADMIN']), esgController.deleteEsg);


module.exports = router;
