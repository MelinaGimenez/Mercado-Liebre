const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')

// disco donde se guardan datos, usando propiedad de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/img/avatar')
    },
    // path.extname va a solicitar extension del usuario
    filename: (req, file, cb) => {
        let fileName = Date.now() + '_img' + path.extname(file.originalname)
        cb(null, fileName)
    }
})

// envia los datos almacenados de multer
const uploadFile = multer({ storage });

const controller = require ('../controllers/controllers');

// solicitar el body(check) de express y validar segun name
const { body } = require('express-validator')
const validaciones = [
    body('nombre').notEmpty().withMessage('Ingresa un nombre'),
    body('usuario').notEmpty().withMessage('Ingresa un nombre de usuario'),
    body('nacimiento').notEmpty().withMessage('Ingresa tu fecha de nacimiento'),
    body('domicilio').notEmpty().withMessage('Ingresa tu dirección'),
    body('perfils').notEmpty().withMessage('Selecciona tu perfil'),
    body('mail').notEmpty().withMessage('Ingresa tu mail'),
    body('contrasenia').notEmpty().withMessage('Ingresa una contraseña'),
    body('contrasenia').notEmpty().withMessage('Ingresa una contraseña'),
]

// ruta de la pagina principal
router.get('/', controller.home);

// ruta de creacion de cuenta
router.get('/registrarse', controller.create);
// procesar el registro, con multer y validaciones
router.post('/registrarse', uploadFile.single('avatar'), validaciones, controller.processCreate);

// ruta de logueo
router.get('/ingresa', controller.login);

module.exports = router;