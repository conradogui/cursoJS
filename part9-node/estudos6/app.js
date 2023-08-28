const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')// com dirname eu pego a pasta atual(modules) e crio o arquivo(teste.json)
const ler = require('./modules/ler')
const escrever = require('./modules/escrever')
// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Carlos'},
//     {nome: 'Luiza'},
//     {nome: 'Mariana'}
// ]
// const json = JSON.stringify(pessoas, '', 2)
// ler(caminhoArquivo, json)

async function escreveArquivo(caminho) { //to usando async pois estou usando promise no ler
    const dados = await escrever(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val.nome))
}

escreveArquivo(caminhoArquivo)