const express = require('express');
const router = express.Router();
const filesController = require('../modules/filesInvestors/controllers/invertsController');
const verifyToken = require('../middlewares/verifyToken');
const checkRole = require('../middlewares/checkRole');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, '../../public/pdf_investors');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const userProvidedName = req.body.fileName || 'archivo';

    const sanitizedName = userProvidedName
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // elimina acentos
      .replace(/\s+/g, '_')                            // reemplaza espacios por "_"
      .replace(/[^a-zA-Z0-9_.-]/g, '');                // permite solo letras, números, guiones y puntos

    cb(null, `${Date.now()}_${sanitizedName}.pdf`);
  }
});


const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== '.pdf') {
      return cb(new Error('Solo se permiten archivos PDF'));
    }
    cb(null, true);
  }
});

router.post(
  '/upload',
  verifyToken,
  checkRole(['SUPERADMIN', 'ADMIN', 'INVESTORS']),
  upload.single('file'),
  filesController.uploadFileC
);

// 📥 Listado de archivos
router.get(
  '/files',
  verifyToken,
  checkRole(['SUPERADMIN', 'ADMIN']),
  filesController.getAllFilesC
);

// 📥 Listado de archivos por email
router.get(
  '/files/investor',
  verifyToken,
  checkRole(['INVESTORS']),
  filesController.getFileByInvestorC
);

router.delete(
  '/files',
  verifyToken,
  checkRole(['SUPERADMIN', 'ADMIN', 'INVESTORS']),
  filesController.deleteFileC
);

module.exports = router;
