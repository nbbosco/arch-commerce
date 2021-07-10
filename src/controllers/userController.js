const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/userDatabase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
}

module.exports = userController;
