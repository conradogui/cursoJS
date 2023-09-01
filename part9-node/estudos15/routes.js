//o trabalho desse arquivo é so fazer o roteamento
const express = require('express')//carrega o express
const route = express.Router()//constante que eu criei
const homeController = require('./src/controllers/homeController')//estou importando o que o home controller exporta
const contatoController = require('./src/controllers/contatoController')


//rotas da home
route.get('/',homeController.paginaInicial)
route.post('/', homeController.trataPost)

// rotas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route //estou exportando o route