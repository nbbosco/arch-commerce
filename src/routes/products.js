const productsController = require('./../controllers/productController')

const express = require('express');
const routes = express.Router();

routes.get('/carrito',productsController.carrito)
routes.get('/producto',productsController.producto)

module.exports = routes;