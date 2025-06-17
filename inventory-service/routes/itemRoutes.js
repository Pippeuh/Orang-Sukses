const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const validateItem = require('../middleware/validateItem');
const authenticateToken = require('../middleware/authenticateToken');

// Hanya user yang login bisa akses
router.post('/', authenticateToken, validateItem, itemController.createItem);
router.get('/', authenticateToken, itemController.getAllItems);
router.get('/:id', authenticateToken, itemController.getItemById);
router.put('/:id', authenticateToken, validateItem, itemController.updateItem);
router.delete('/:id', authenticateToken, itemController.deleteItem);

module.exports = router;
