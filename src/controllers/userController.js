const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../database/userDatabase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const User = require('../models/user.js')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const userController = {
    login: (req, res) => {
        res.render('./users/login')
    },
    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);
        if(userToLogin){
            let comparePassword = bcryptjs.compareSync(req.body.contraseña, userToLogin.contraseña);
            if (comparePassword) {
                delete userToLogin.contraseña;
                req.session.userLogged = userToLogin;

                if(req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, {maxAge: (1000*60)*2})
                }
                return res.redirect('/users/profile')
            }
        }

        return res.render('./users/login', {
            errors: {
                email: {
                    msg: 'Las credenciales son inválidas'
                }
            }
        });
    },
    profile: (req, res) => {
        return res.render('./users/profile',{
            user: req.session.userLogged
        });
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    },
    registro: (req, res) => {
        res.cookie('testing', 'Hola mundo!', {maxAge: 1000 * 30})
        res.render('./users/registro')
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('users/registro', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
        let userInDB = User.findByField('email', req.body.email);

        if (userInDB) {
            return res.render('users/registro', {
                errors: {
                    msg: 'Este email ya esta registrado'
                },
                oldData: req.body
            })
        }

        let userToCreate = {
            ...req.body,
            contraseña: bcryptjs.hashSync(req.body.contraseña, 10),
            avatar: req.file.filename
        }

        let userCreated = User.create(userToCreate);

        return res.redirect('/users/login');
    },
    store: (req, res) => {
        let idNuevo = products[products.length-1].id + 1;
        let nuevoObjeto = Object.assign({id: idNuevo},req.body);
        products.push(nuevoObjeto);
        fs.writeFileSync(productsFilePath, JSON.stringify(products,null, 4));
        res.redirect('/');
    },
    editar: (req, res) => {
        let idUsuario= req.params.id
		for(let i=0;i<users.length;i++){
			if (users[i].id==idUsuario){
				var usuarioEncontrado = users[i];
			}
		}
        res.render('./users/editar', {editar: usuarioEncontrado})
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
