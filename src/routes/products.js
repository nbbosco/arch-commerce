const productsController = require('./../controllers/productController')

const express = require('express');
const router = express.Router();

router.get('/carrito',productsController.carrito)
router.get('/producto',productsController.producto)

module.exports = router;