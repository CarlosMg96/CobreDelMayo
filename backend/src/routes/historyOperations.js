const express = require('express');
const router = express.Router();
const historyOpController = require('../modules/historyOperations/controllers/historyOpController');
const verifyToken = require('../middlewares/verifyToken');
const checkRole = require('../middlewares/checkRole');

// Definir las rutas correctamente
router.post('/create-history-operation', verifyToken, checkRole(['MASTER', 'SUPERADMIN', 'ADMIN']), historyOpController.createHistoryOp);
router.get('/history-operation-by-language', historyOpController.getHistoryOpByLanguage);
router.put('/update-history-operation', verifyToken, checkRole(['MASTER', 'SUPERADMIN', 'ADMIN']), historyOpController.updateHistoryOp);
router.delete('/delete-history-operation', verifyToken, checkRole(['MASTER', 'SUPERADMIN', 'ADMIN']), historyOpController.deleteHistoryOp);

module.exports = router;
