function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}
//                função anônima v 
const timer = setInterval(function() { //função que executa a cada 1000 milisegundos a função de mostrar a hora, dessa forma ela sempre se atualiza sozinha
    console.log(mostraHora())
}, 1000) 

setTimeout(function() { // faz uma parada automática após 10 segundos(10000 milisegundos)
    clearInterval(timer)
}, 10000)

setTimeout(function() { //executa durante 3 segundos
    clearInterval(timer)
}, 3000)

setTimeout(function() {
    console.log('Olá mundo!') //aparece olá mundo após 5 segundos
}, 5000)