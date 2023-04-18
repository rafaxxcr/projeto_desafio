// importação  do express.js
const express = require("express");

// criar a rota raiz "/"
const router = express.Router()
router.get('/',(req, res) =>{
    res.sendFile(__dirname +'/index.html');
});
// tratativa das rotas com express - router
router.get('/contatos',(req, res) =>{
    res.sendFile(__dirname +'/contato.html');
});
router.get('/produtos',(req, res) =>{
    res.sendFile(__dirname +'/produto.html');
});
router.get('/catalogos',(req, res) =>{
    res.sendFile(__dirname +'/catalogo.html');
});

//invocando o uso do app
const app = express();
app.use('/', router);

//exportando app
module.exports = app;