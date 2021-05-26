const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use( express.static(publicPath));

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", (_req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
})

app.get("/carrito", (_req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/carrito.html"));
})

app.get('/login', (_req, res) => {
    let htmlPath = path.join(__dirname, './views/login.html')
    res.sendFile(htmlPath);
})

app.get("/producto", (_req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/producto.html"));
})

app.get("/registro", (_req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/registro.html"));
});
