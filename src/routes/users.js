const userController = require('./../controllers/userController')

const express = require('express');
const router = express.Router();

router.get('/login',userController.login)
router.get('/registro',userController.registro)

module.exports = router;