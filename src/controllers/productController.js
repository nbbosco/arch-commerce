const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productsDatabase.json');
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
		res.render('./products/productoDetalle', {productoEnDetalle: productoEncontrado, productos: products});
	},

    crear: (req, res) => {
        res.render('./products/crear')
    },

    store: (req, res) => {
        let nombreImagen = req.file.filename;
        let idNuevo = products[products.length-1].id + 1;
        let nuevoObjeto = Object.assign({id: idNuevo},req.body,{imagen:nombreImagen});
        products.push(nuevoObjeto);
        fs.writeFileSync(productsFilePath, JSON.stringify(products,null,4));
        res.redirect('/');
    },

    editar: (req, res) => {
        let idProducto= req.params.id
		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				var productoEncontrado = products[i];
			}
		}
        res.render('./products/editar', {productoEnDetalle: productoEncontrado});
    },

    update: (req, res) => {
		let valoresNuevos = req.body;
		let idProducto= req.params.id

		let nombreImagen = req.file.filename

		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				
				var imagenAnterior = products[i].imagen
				products[i].nombreProducto = valoresNuevos.nombreProducto;
				products[i].precio = valoresNuevos.precio;
                products[i].fechaDeCreacion = valoresNuevos.fechaDeCreacion;
                products[i].creador = valoresNuevos.creador;
                products[i].coleccionista = valoresNuevos.coleccionista;
				products[i].categoria = valoresNuevos.categoria;
				products[i].descripcion = valoresNuevos.descripcion;
				products[i].imagen = nombreImagen;

				var productoEncontrado = products[i];

				break;
			}
		}

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null,4));
		fs.unlinkSync(path.join(__dirname,'../../public/img/products/' + imagenAnterior));
		res.render('productoDetalle', {productoEnDetalle: productoEncontrado});
	},

    destroy : (req, res) => {
		let idProducto= req.params.id
		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				var nombreImagen = products[i].imagen;
				products.splice(i,1);
				break;
			}
        }
			fs.writeFileSync(productsFilePath, JSON.stringify(products,null,4));
			fs.unlinkSync(path.join(__dirname,'../../public/img/products/' + nombreImagen));
			res.render('home', {productos: products});
		},

    carrito: (req, res) => {
        res.render('./products/carrito', {productos: products})
    }
}

module.exports = productController;

