function rand(min, max) {
    max *= 1000
    min *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}
function esperaAi(msg, tmp) {
    return new Promise((resolve, reject) => { 
        if(typeof msg !== 'string') {
            reject(false)
            return
        } 

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tmp)
    })
}

function baixaPagina() {
    const emCache = true //se for true ele retorna 'Pagina em cache', se for false reetorna 'Baixei a página'e demora 3 seg para aparecer

    if(emCache) {
        return Promise.resolve('Pagina em cache') //no resolve ele cai no then, no reject el cai direto no catch (ou seja essas funções retornam promessas resolvidas(resolve) ou promessas rejeitadas(reject))
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}
baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch(e => console.log('ERRO', e))


// const promises = [
//     'Primeiro valor',//esse valor não é promise
//     esperaAi('Promise 1', 3000), //esses valores vão passar pela função que tem a promise
//     esperaAi('Promise 3', 500), //esses valores vão passar pela função que tem a promise
//     esperaAi('Promise 2', 1000), //esses valores vão passar pela função que tem a promise
//     'Outro valor'//esse valor não é promise
// ]

// Promise.all(promises) //resolve todas as promises e retorna os valores de volta (se uma promisse tiver erro, ela so retorna o erro)
// .then(valor => {
//     console.log(valor)
// })
// .catch(erro => {
//     console.log(erro)
// })


// Promise.race(promises) //me retorna o primeiro valor que resolver (se cair no erro ele me entrega o erro mesmo)
// .then(valor => {
//     console.log(valor)
// })
// .catch(erro => {
//     console.log(erro)
// })
