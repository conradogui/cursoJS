console.log(__filename)// nome do arquivo atual : c:\Users\ADM\desktop\conrado\cursoJS\Node\estudos2\app.js
console.log(__dirname) //nome da pasta atual : c:\Users\ADM\desktop\conrado\cursoJS\Node\estudos2

const path = require('path')
console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'imagens'))//ele mostra o caminho das pastas : c:\Users\ADM\desktop\conrado\cursoJS\Node\estudos2\arquivos\imagens









// const Cachorro = require('./B/C/D/mod1')

// const cachorrinho = new Cachorro('Dog')
// cachorrinho.latir()