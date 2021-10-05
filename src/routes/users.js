const userController = require('../controllers/userController')

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// const uploadFile = require('../middlewares/multerMiddleware');
// const validations = require('../middlewares/validateRegisterMiddleware.js');
const guestMiddleware = require('../middlewares/guestMiddleware');
// const authMiddleware = require('../middlewares/guestMiddleware');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
        let folder = path.join(__dirname, "../../public/img/users");
        cb(null, folder)
},
	filename: function(req, file, cb){
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
}
});

let uploadFile = multer({ storage });

const { body } = require('express-validator');

validations = [
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

router.get('/login', guestMiddleware, userController.login);
router.post('/login',userController.loginProcess);
router.get('/registro', guestMiddleware, userController.registro);
router.post('/registro', uploadFile.single('avatar'), validations, userController.processRegister);
router.get ('/:id/editar', userController.editar);
router.post ('/:id/editar', userController.update);
router.get('/profile', userController.profile);
router.get('/logout', userController.logout);


module.exports = router;