const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const User = require('../user.js')

const db = require('../database/models');
const Op = db.Sequelize.Op;

const userController = {
    login: (req, res) => {
        
        res.render('./users/login')
    },
    loginProcess: (req, res) => {
        db.Usuarios.findOne({
            where : {
                email : req.body.email
            }
        })
        .then(usuario => {
        if(usuario){
            let comparePassword = bcryptjs.compareSync(req.body.contraseña, usuario.contraseña);
            if (comparePassword) {
                delete usuario.contraseña;
                req.session.userLogged = usuario;

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
        })
    })
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
        let userInDB
        db.Usuarios.findAll({
            where : {
                email : {[Op.like] : req.body.email}
            }
        })
        .then (usuarios => {
            userInDB = usuarios
        })
        //let userInDB = User.findByField('email', req.body.email);

        if (userInDB) {
            return res.render('users/registro', {
                errors: {
                    msg: 'Este email ya esta registrado'
                },
                oldData: req.body
            })
        } else {
            db.Usuarios.create ({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                contraseña: bcryptjs.hashSync(req.body.contraseña, 10),
                avatar: req.file.filename,
            })
            return res.redirect('/users/login');
        }

        // let userToCreate = {
        //     ...req.body,
        //     contraseña: bcryptjs.hashSync(req.body.contraseña, 10),
        //     avatar: req.file.filename
        // }

        //let userCreated = User.create(userToCreate);

        
    },
    store: (req, res) => {
        let idNuevo = products[products.length-1].id + 1;
        let nuevoObjeto = Object.assign({id: idNuevo},req.body);
        products.push(nuevoObjeto);
        fs.writeFileSync(productsFilePath, JSON.stringify(products,null, 4));
        res.redirect('/');
    },
    editar: (req, res) => {
        res.render('./users/editar', {user: req.session.userLogged})
    },
    update: (req, res) => {
		let valoresNuevos = req.body;
		let idUser= req.params.id

		let nombreImagen = req.file.filename

        if (idUser == db.Usuarios.id){
            let userEncontrado = {
                nombre: valoresNuevos.nombre,
                apellido: valoresNuevos.apellido,
                email: valoresNuevos.email,
                telefono: valoresNuevos.telefono,
                fechaNacimiento: valoresNuevos.fechaNacimiento,
                creador: valoresNuevos.creador,
                coleccionista: valoresNuevos.coleccionista
            }
            db.Usuarios.update ({
                userEncontrado
            }, {
                where : {
                    id : idUser
                }
            })
        }
		// for(let i=0;i<users.length;i++){
		// 	if (products[i].id==idUser){
        //         var imagenAnterior = users[i].imagen
        //         users[i].imagen,
		// 		users[i].nombre = valoresNuevos.nombre,
        //         users[i].apellido = valoresNuevos.apellido,
        //         users[i].nombre = valoresNuevos.nombre,
        //         users[i].email = valoresNuevos.email,
        //         users[i].telefono = valoresNuevos.telefono,
        //         users[i].fechaNacimiento = valoresNuevos.fechaNacimiento,
        //         users[i].creador = valoresNuevos.creador,
        //         users[i].coleccionista = valoresNuevos.coleccionista
				

		// 		var userEncontrado = users[i];

		// 		break;
		// 	}
		// }

		// fs.writeFileSync(usersFilePath, JSON.stringify(users,null,4));
		// fs.unlinkSync(path.join(__dirname,'../../public/img/' + imagenAnterior));
		res.render('./users/editar', {users: userEncontrado});
	},
}

module.exports = userController;