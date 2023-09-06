exports.paginaInicial = (req, res, next) => {
    res.render('index', {
        titulo: 'Este será o título da página', 
        numeros: [0, 1, 2, 3, 4 ,5 , 6, 7, 8 ,9]
    })
    return
}

exports.trataPost = (req, res, next) => {
    res.send(req.body)
    return
}