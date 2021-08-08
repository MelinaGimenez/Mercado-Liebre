const { validationResult } = require('express-validator')

const controller = {
    // renderiza pagina principal
    home: (req, res) =>{
        let title = 'Bienvenidos a Mercado Liebre'
        res.render('./page/home.ejs', { title: title })
    },
    // renderiza la pagina de creacion de usuario
    create: (req, res) =>{
        let title = 'Crea tu cuenta'
        res.render('./page/register', { title: title })
    },
    // enviar formulario post de creacion de usuario
    processCreate : (req, res) =>{
        const resultadoValidacion = validationResult(req);
        let title = 'Crea tu cuenta'
        // si tiene errores reenviara el fomulario, mapped convierte en objeto literal
        if(resultadoValidacion.errors.length > 0){
            return res.render('page/register', {errors: resultadoValidacion.mapped()}
            )
        }
    },
    // renderiza la pagina de logueo
    login: (req, res) =>{
        let title = 'Login'
        res.render('../views/page/login.ejs', { title: title })
    }
};

module.exports = controller;