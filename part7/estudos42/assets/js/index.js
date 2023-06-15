const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest() 
        xhr.open(obj.method, obj.url, true) //Estamos configurando a solicitação HTTP com base nas informações fornecidas no objeto obj. obj.method contém o método HTTP (por exemplo, GET, POST) e obj.url contém a URL de destino para a solicitação.
        xhr.send() //Estamos enviando a solicitação HTTP para o servidor
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) { //Estamos verificando se o código de status da resposta HTTP está na faixa de 200 a 299, o que indica uma resposta bem-sucedida
                resolve(xhr.responseText) // xhr.responseText contém o corpo da resposta HTTP.
            } else {
                reject(xhr.statusText)//xhr.statusText contém uma descrição do status da resposta HTTP.
            }
        })
    })
}

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a') { 
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href')
    
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