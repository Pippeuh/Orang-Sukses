const { body, validationResult } = require('express-validator');

const validateItem = [
  body('nama').notEmpty().withMessage('Nama tidak boleh kosong'),
  body('jumlah').isInt({ min: 1 }).withMessage('Jumlah harus lebih dari 0'),
  body('status').optional().isIn(['tersedia', 'dikirim', 'habis']).withMessage('Status tidak valid'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateItem;
