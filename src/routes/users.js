const userController = require('../controllers/userController')

const express = require('express');
const router = express.Router();

router.get('/login',userController.login)
router.get('/registro',userController.registro)
router.post('/registro', userController.store);
router.get ('/editar', userController.editar);
router.get ('/editar', userController.update);

module.exports = router;