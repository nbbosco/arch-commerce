const productController = {
    carrito: (req, res) => {
        res.render('./products/carrito')},
    producto: (req, res) => {
        res.render('./products/producto')},
    crear: (req, res) => {
        res.render('./products/crear')},
    editar: (req, res) => {
        res.render('./products/editar')},
}

module.exports = productController;

