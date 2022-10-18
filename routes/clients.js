const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/clients');
const { validatorCreateItem, validatorGetItem } = require('../validators/clients');
const router = express.Router();

router.get('/', getItems);
router.get('/:id', validatorGetItem, getItem);
router.post('/', validatorCreateItem, createItem);
router.put('/:id', validatorGetItem, validatorCreateItem, updateItem);
router.delete('/:id', validatorGetItem, deleteItem);

module.exports = router;