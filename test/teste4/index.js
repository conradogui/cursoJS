function rand(min=1, max=3) {
    max *= 1000
    min *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function espera(msg, tmp) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Erro aqui')
        setTimeout(() => {
            resolve(msg)
        }, tmp)
    })
}

async function faz() {
    try {
        const faz1 = await espera('Primeira mensagem', rand())
        console.log(faz1)

        const faz2 = await espera('Segunda mensagem da promessa', rand())
        console.log(faz2)

        const faz3 = await espera('Terceira mensagem', rand())
        console.log(faz3)

        const faz4 = await espera('Mensagem final', rand())
        console.log(faz4)
    } catch(e) {
        console.log(e)
    }
}
faz()