const express = require('express')
const app = express()



app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Ola mundo</button>
    </form>
    `)
})

app.get('/testes/:idUsuarios?/:parametro', (req, res) => { //a interrogação fala que o parametro pode ou não ser recebido
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)//os parametros da url são acessados pelo req.params
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})