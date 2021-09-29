const DB = require('../database/models');
const Op = DB.Sequelize.Op;

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productsDatabase.json');
const productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname, '../database/userDatabase.json');
const usersDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

module.exports = {
    productsList: (req, res) => {
        return res.status(200).json({
            total: productsDB.length,
            data: productsDB,
            status: 200
            })
        },
    productsShow: (req, res) => {
        let idDB= req.params.id
        for(let i=0;i<productsDB.length;i++){
            if (productsDB[i].id==idDB){
                var findDB = productsDB[i];
            }
        }
        return res.status(200).json({
            data: findDB,
            status: 200
            })
    },
    categoryList: (req, res) => {
        let categoriaDB = productsDB
        return res.status(200).json({
            total: categoriaDB.length,
            data: categoriaDB,
            status: 200
            })
        },
    usersList: (req, res) => {
        return res.status(200).json({
            total: usersDB.length,
            data: usersDB,
            status: 200
            })
        },
    usersShow: (req, res) => {
        let idDB= req.params.id
        for(let i=0;i<usersDB.length;i++){
            if (usersDB[i].id==idDB){
                var findDB = usersDB[i];
            }
        }
        return res.status(200).json({
            data: findDB,
            status: 200
            })
    }
}
