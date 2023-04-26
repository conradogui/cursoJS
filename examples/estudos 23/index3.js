//IIFE -> Immediatly invoked function expression
(function() {
    const sobrenome = 'Conrado'
    function criaNome(nome) {//criei o nome
        return nome + ' ' + sobrenome
    }
    function falaNome() {//falei o nome
        console.log(criaNome('Guilherme'))
    }
    falaNome()
})() //esses parenteses no final é onde o js avalia a execução da função (como se eu chamasse ela com esses parenteses)