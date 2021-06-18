const userController = require('./../controllers/userController')

const express = require('express');
const routes = express.Router();

routes.get('/login',userController.login)
routes.get('/registro',userController.registro)

module.exports = routes;