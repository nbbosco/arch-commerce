const productsController = require('../controllers/productController');

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

let multerDiskStorage = multer.diskStorage({
	destination: function(req, file, callback){
        let folder = path.join(__dirname, "../../public/img");
        callback(null, folder)
},
	filename: function(req, file, callback){
		let imageName = 'img' + '-' + file.originalname;
		callback(null, imageName);
}
});

let uploadFile = multer({storage: multerDiskStorage});

router.get('/', productsController.producto); 
router.get('/carrito', productsController.carrito)

router.get('/create', productsController.crear); 
router.post('/create', uploadFile.single('imagen'), productsController.store); 

router.get('/:id', productsController.detalle); 

router.get('/:id/edit', productsController.editar); 
router.put('/:id/edit', productsController.update); 

router.delete('/:id', productsController.destroy); 


module.exports = router;