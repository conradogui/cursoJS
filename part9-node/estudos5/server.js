const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(3000, () => {
    console.log('Acessar https://localhost:3000')
    console.log('Servidor executando na porta 3000')
})