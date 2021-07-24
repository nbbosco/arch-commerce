const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../database/userDatabase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const userController = {
    login: (req, res) => {
        res.render('./users/login')
    },
    registro: (req, res) => {
        res.render('./users/registro')
    },
    store: (req, res) => {
        let idNuevo = products[products.length-1].id + 1;
        let nuevoObjeto = Object.assign({id: idNuevo},req.body);
        products.push(nuevoObjeto);
        fs.writeFileSync(productsFilePath, JSON.stringify(products,null, 4));
        res.redirect('/');
    },
    editar: (req, res) => {
        res.render('./users/editar')
    },
    update: (req, res) => {
		let valoresNuevos = req.body;
		let idUser= req.params.id

		let nombreImagen = req.file.filename

		for(let i=0;i<users.length;i++){
			if (products[i].id==idUser){
				
				var imagenAnterior = users[i].imagen
				users[i].nombre = valoresNuevos.nombre;
                users[i].apellido = valoresNuevos.apellido;
                users[i].nombre = valoresNuevos.nombre;
                users[i].email = valoresNuevos.email;
                users[i].telefono = valoresNuevos.telefono;
                users[i].fechaNacimiento = valoresNuevos.fechaNacimiento;
                users[i].creador = valoresNuevos.creador;
                users[i].coleccionista = valoresNuevos.coleccionista;

				var userEncontrado = users[i];

				break;
			}
		}

		fs.writeFileSync(usersFilePath, JSON.stringify(users,null,4));
		fs.unlinkSync(path.join(__dirname,'../../public/img/' + imagenAnterior));
		res.render('./users/editar', {users: userEncontrado});
	},
}

module.exports = userController;
