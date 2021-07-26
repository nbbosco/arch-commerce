const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('nombre').notEmpty().withMessage('Tenes que escribir un nombre'),
    body('email')
        .notEmpty().withMessage('Tenes que escribir un correo electrónico').bail()
        .isEmail().withMessage('Tenes que escribir un formato de correo válido'),
    body('contraseña').notEmpty().withMessage('Tenes que escribir una contraseña'),
    body('codigo').notEmpty().withMessage('Tenes que tener un codigo de invitación'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.JPG', '.PNG', '.GIF'];

        if (!file) {
            throw new Error('Tenes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
        if (acceptedExtensions.includes(fileExtension)) {
            throw new Error(`El formato de la imagen no es valido, subir ${acceptedExtensions.join(', ')}`);
        }
    };
        return true;
    }),
]