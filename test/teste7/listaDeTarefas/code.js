const texto = document.querySelector('#texto')
const botao = document.querySelector('#botaoEnviar')
const mensagem = document.querySelector('#mensagem')

botao.addEventListener('click', e => {
    e.preventDefault()
    enviaMensagem(texto.value)
})

function enviaMensagem(msg) {
    const p = document.createElement('p')
    const mensagemParagrafo = mensagem.appendChild(p)
    mensagemParagrafo.innerText += msg
}
