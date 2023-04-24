//IIFE -> Immediatly invoked function expression
(function() {
    const sobrenome = 'Conrado'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }
    function falaNome() {
        console.log(criaNome('Guilherme'))
    }
    falaNome()
})()