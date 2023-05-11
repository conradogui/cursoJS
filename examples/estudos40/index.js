
//Promises
function rand(min, max) {
    max *= 1000
    min *= 1000
    return Math.floor(Math.random() * (max - min) +min)
}
function esperaAi(msg, tmp) {
    return new Promise((resolve, reject) => { //resolve e reject são funções que vão ser chamadas dentro de promise(resolve:codigo executou com sucesso, então resolve ele. reject:deu um erro ent rejeita isso)
        if(typeof msg !== 'string') reject('Bad value') 
        setTimeout(() => {
            resolve(msg) //aqui so posso mandar apenas um parametro
        }, tmp)
    })
}
esperaAi('Conexão com BD', rand(1, 3)).then(resposta => {
    console.log(resposta)
    return esperaAi('Buscando dados da BASE', rand(1, 3))
})
.then(resposta => {
    console.log(resposta)
    return esperaAi( 22222 , rand(1, 3))
})
.then(resposta => {
    console.log(resposta)
})
.then(() => {
    console.log('Exibe dados na tela')
})
.catch( e => {
    console.log('erro', e)
})