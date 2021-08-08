const express = require('express');
const app = express();

const path = require('path');

const rutas = require('./routes/home.js')

// usa path para redirigir a la carpeta public
const publicPath = path.resolve(__dirname, '../public');
// indica que ya esta parada en public, ahorra ruta para pagina
app.use(express.static(publicPath));

// para usar ejs, previamente instalado
app.set('view engine', 'ejs');

// permite usar el req.body
app.use(express.urlencoded({ extended : false }));

// redirige a rutas a partir del /
app.use('/', rutas);

// levanta el servidor
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
})