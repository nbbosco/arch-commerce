// ************ Requerimientos ************
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override');

// ************ express() ************
const app = express();

// ************ Middlewares ************
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

// ************ Template Engine ************
app.set ('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/views'));
app.set('views', path.join(__dirname, '/views'));

// ************ Sistema de Rutas ************
const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

// ************ Visualizar ************
app.listen((process.env.PORT || 3000), function() {
    console.log("Servidor corriendo en el puerto 3000");
});



