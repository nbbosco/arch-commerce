const productController = {
    carrito: (req, res) => {
        res.render('./products/carrito')},
    producto: (req, res) => {
        res.render('./products/producto')}
}

module.exports = productController;

