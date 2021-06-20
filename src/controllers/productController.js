const productController = {
    carrito: (req, res) => {
        res.render('./products/carrito')},
    producto: (req, res) => {
        res.render('./products/producto')},
    crear: (req, res) => {
        res.render('./products/product-edit')},
}

module.exports = productController;

