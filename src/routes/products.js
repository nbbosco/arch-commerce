const productsController = require('../controllers/productController');

const express = require('express');
const router = express.Router();

router.get('/', productsController.producto); 
router.get('/carrito', productsController.carrito)

router.get('/create', productsController.crear); 
router.post('/create', productsController.store); 

router.get('/:id', productsController.detalle); 

router.get('/:id/edit', productsController.editar); 
// router.put('/:id', productsController.update); 

// router.delete('/:id', productsController.eliminar); 


module.exports = router;