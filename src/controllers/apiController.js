const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    productsList: (req, res) => {
        db.Productos.findAll()
        .then(products => {
            return res.status(200).json({
                total: products.length,
                data: products,
                status: 200
                })
        })
        },
    productsShow: (req, res) => {
        db.Productos.findByPk(req.params.id)
        .then(products => {
            return res.status(200).json({
                data: products,
                status: 200
                })
        })
    },
    categoryList: (req, res) => {
        db.Categorias.findAll()
        .then(category => {
            return res.status(200).json({
                total: category.length,
                data: category,
                status: 200
                })
        })
        },
    productsSearch: (req, res) => {
        db.Productos.findAll({
            where: {
                nombre: {[Op.like]: '%' + req.query.keyword + '%'}
            }
        })
        .then(products => {
            if (products.length > 0){
                return res.status(200).json(products)
            }
            return res.status(200).json('No existen productos')
            })
        },
    usersList: (req, res) => {
            db.Usuarios.findAll()
            .then(users => {
                return res.status(200).json({
                    total: users.length,
                    data: users,
                    status: 200
                    })
            })
        },
    usersShow: (req, res) => {
        db.Usuarios.findByPk(req.params.id)
        .then(users => {
            return res.status(200).json({
                data: users,
                status: 200
                })
        })
    }
}
