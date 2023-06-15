// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest() 
//         xhr.open(obj.method, obj.url, true) 
//         xhr.send()
    
//         xhr.addEventListener('load', () => {
//             if(xhr.status >= 200 && xhr.status < 300) { 
//                 resolve(xhr.responseText) 
//             } else {
//                 reject(xhr.statusText)
//             }
//         })
//     })
// }

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a') { 
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    try { //usei try e catch para tratar o erro
       const href = el.getAttribute('href')
       const response = await fetch(href) //fetch retorna uma promise

    if(response.status !== 200) throw new Error('ERRO 404!')

    const html = await response.text() //converte a response (await fetch(href)) em texto
    carregaResultado(html)// e joga dentro da div  
    } catch (e) { //usei try e catch para tratar o erro
        console.log(e)
    }
       
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}

