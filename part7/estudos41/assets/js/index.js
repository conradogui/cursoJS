const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest() // chamo o construtor dele para emitir solicitações HTTP para trocar dados entre o site e o servidor
        xhr.open(obj.method, obj.url, true)//ultilizo o open para inicializa-lo antes de chamar
        xhr.send()//ultilizo o send para enviar solicitação ao servidor
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) { //o status é o status do XMLHttpRequest que vai de 100 a 500
                resolve(xhr.responseText) //o que eu buscar de um documento html, JSON ou qualquer coisa vai para essa função // nesse caso irá voltar o responseText(propriedade somente leitura retorna o texto recebido de um servidor após o envio de uma solicitação)
            } else {
                reject(xhr.statusText)//ao contrario de success eu mando o erro (reject) e escrevo o status do erro (dentro do reject)
            }
        })
    })
}

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()//garantindo que eu to obtendo o nome da tag que foi clicada com el e convertendo para lowerCase

    if(tag === 'a') { //se for o link executa a ação
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href')//aqui eu to obtendo o link que está sendo clicado
    
    const objConfig = {
        method: 'GET',
        url: href      
    }
    try {
        const response = await request(objConfig)
        carregaResultado(response)
    } catch(e) {
        console.log(e)
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}

/*
O objeto XMLHttpRequest permite que as requisições HTTP sejam feitas via browser, permite a comunicação assííncrona com o servidor, 
através de script (JavaScript), sem que seja iniciada uma nova janela , não tendo a necessidade de atualização da página, sendo possível 
criar páginas mais interativas.

*/