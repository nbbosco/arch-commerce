const express = require("express");
const path = require("path");

const app = express();

const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');

const publicPath = path.resolve(__dirname, "../public");
app.use( express.static(publicPath));

app.set ('view engine', 'ejs');
app.use('/', mainRoutes, productsRoutes, usersRoutes);

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});


//Localhost
// app.listen(3000, () => {
//     console.log("Servidor corriendo");
// });


