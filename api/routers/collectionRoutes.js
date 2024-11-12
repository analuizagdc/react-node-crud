
const express = require('express');
const router = express.Router();

//importa o controlador de coletas
const { getAllCollections, createCollection, updateCollection, deleteCollection } = require('../controllers/collectionController');

router.get('/', verifyToken, getCollections);
router.post('/', verifyToken, checkRole('admin'), createCollection);
router.put('/:id', verifyToken, checkRole('admin'), updateCollection);
router.delete('/:id', verifyToken, checkRole('admin'), deleteCollection);

module.exports = router;

