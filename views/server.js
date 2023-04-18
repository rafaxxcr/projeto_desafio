//importando o app do arquivo app.js
const app = require('./app');

// inportando e configurando o dotenv:
require('dotenv').config({path:'variables.env'});

//configurando o servidor
app.set('port',process.env.PORT ||3000);
const server = app.listen(app.get('port'),() =>{
    console.log ("Servidor Rodando na porta; " +server.address().port);
});
