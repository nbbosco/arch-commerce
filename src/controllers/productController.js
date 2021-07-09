const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {
    producto: (req, res) => {
        res.render('./products/producto', {productos: products})
    },

    detalle: (req, res) => {
        let idProducto= req.params.id
		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				var productoEncontrado = products[i];
			}
		}
		res.render('./products/productoDetalle', {productoEnDetalle: productoEncontrado});
	},

    crear: (req, res) => {
        res.render('./products/crear')
    },

    store: (req, res) => {
        let idNuevo = products[products.length-1].id + 1;
        let nuevoObjeto = Object.assign({id: idNuevo},req.body);
        products.push(nuevoObjeto);
        fs.writeFileSync(productsFilePath, JSON.stringify(products,null));
        res.redirect('/');
    },

    editar: (req, res) => {
        res.render('./products/editar')
    },

    carrito: (req, res) => {
        res.render('./products/carrito', {productos: products})
    }
}

module.exports = productController;

