// fetch('pessoas.json')
//     .then(resposta => resposta.json())//aqui ele é convertido em um objeto em javascript
//     .then(json => carregaElementosNaPagina(json))

axios('pessoas.json') //axios é mais simples
    .then(resposta => carregaElementosNaPagina(resposta.data))//ja manda direto nesse local//resposta.data são os dados

function carregaElementosNaPagina(json) {
    const table = document.createElement('table')
    for(let pessoa of json) {//retorna uma pessoa a cada laço
        const tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerHTML = pessoa.nome
        tr.appendChild(td1)

        let td2 = document.createElement('td')
        td2.innerHTML = pessoa.idade
        tr.appendChild(td2)

        let td3 = document.createElement('td')
        td3.innerHTML = pessoa.salario
        tr.appendChild(td3)

        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
    
}
