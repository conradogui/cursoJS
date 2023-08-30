const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))//usso essa linha de código para tratar o body, se não ele irá aparecer como undefined

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Ola mundo</button>
    </form>
    `)
})

app.get('/testes/:idUsuarios?/:parametro', (req, res) => { //a interrogação fala que o parametro pode ou não ser recebido
    //Quando ultilizamos params, estamos se referindo as rotas que vem na url, por exemplo: /profiles/1
    //req.query vem na query string -> /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
    // quando vem na requisição do body, exemplo, quando tem  method="POST" no body, devemos tratar a rota como sendo post
    console.log(req.params)
    console.log(req.query)
    res.send(req.query.facebookprofile)//os parametros da url são acessados pelo req.params
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome}`)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})