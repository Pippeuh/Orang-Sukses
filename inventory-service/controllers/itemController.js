const Item = require('../models/itemModel');

// CREATE
exports.createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAllItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

// READ ONE
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item) res.json(item);
    else res.status(404).json({ error: 'Item not found' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
};


// UPDATE
exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (item) res.json(item);
    else res.status(404).json({ error: 'Item not found' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
};


// DELETE
exports.deleteItem = async (req, res) => {
  try {
    const deleted = await Item.findByIdAndDelete(req.params.id);
    if (deleted) res.json({ message: 'Deleted' });
    else res.status(404).json({ error: 'Item not found' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
};

