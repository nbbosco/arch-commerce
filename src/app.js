const express = require("express");
const path = require("path");

const app = express();

const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');

const publicPath = path.resolve(__dirname, "../public");
app.use( express.static(publicPath));

app.set ('view engine', 'ejs');

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

app.use('/', mainRoutes); 
app.use('/', productsRoutes); 
app.use('/', usersRoutes); 


// app.get("/", (_req, res) => {
//     res.sendFile(path.resolve(__dirname,"./views/"));
// })
