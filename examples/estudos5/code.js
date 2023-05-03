function meuEscopo() {
    const form = document.querySelector('.form') // selecionei o formulario
    const resu = document.querySelector('.res')
    const pessoas = [] //o que vai preencher esse array é o que vou enviar

    function recebeEventoForm (evento) {
        evento.preventDefault() // previne o que era pra acontecer por padrão (envio do formulário e atualização da página)

        const nome = form.querySelector('.txt1') //selecionei com form ao inves de document pois sei que o que eu quero está dentro do form
        const sobrenome = form.querySelector('.txt2') //selecionei com form ao inves de document pois sei que o que eu quero está dentro do form
        const peso = form.querySelector('.txt3') //selecionei com form ao inves de document pois sei que o que eu quero está dentro do form
        const altura = form.querySelector('.txt4') //selecionei com form ao inves de document pois sei que o que eu quero está dentro do form
        pessoas.push = ({ //ja enviei o objeto dentro dos parenteses (no caso os objetos são: nome, sobrenome, peso e altura)
            nome:nome.value, //tenho que colocar a chave e o valor
            sobrenome:sobrenome.value, //tenho que colocar a chave e o valor
            peso:peso.value,//tenho que colocar a chave e o valor
            altura:altura.value//tenho que colocar a chave e o valor 
        })
        console.log(pessoas)
        
        resu.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }
    form.addEventListener('submit', recebeEventoForm) //ao enviar "submit", ele recebe a função recebeEventoForm
}
meuEscopo() // faz a função acontecer

//O método addEventListener() do JavaScript permite que você configure funções a serem chamadas quando um evento específico acontece, como, por exemplo, quando um usuário clica em um botão.