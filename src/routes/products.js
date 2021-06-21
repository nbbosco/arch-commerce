const productsController = require('./../controllers/productController')

const express = require('express');
const routes = express.Router();

routes.get('/carrito',productsController.carrito)
routes.get('/producto',productsController.producto)
routes.get('/producto/crear',productsController.crear)
routes.get('/producto/editar',productsController.editar)

module.exports = routes;