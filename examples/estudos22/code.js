const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li')
    return li
}

inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if(!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})
function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}
function criaBotaoApagar(li) {
    li.innerHTML += ' ' //para dar o espaço entre o botão e a lista
    const botaoApagar = document.createElement('button')
    botaoApagar.innerHTML = 'Apagar'
    //botaoApagar.classList.add('apagar')
    botaoApagar.setAttribute('class', 'Apagar') //a classe vai ser Apagar
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerHTML = textoInput
    tarefas.appendChild(li)  
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

btnTarefa.addEventListener('click', function () {
    if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value) //esse inputTarefa.value vai ser o que vai estar dentro da função criaTarefa(textoInput)
})
document.addEventListener('click', function(e) {
    const el = e.target
    if(el.classList.contains('Apagar')) { //se contem 'Apagar', vai remover o parent, no caso o li
        el.parentElement.remove()
        salvarTarefas()
    }
})
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')//usa o querySelectorAll pois quero selecionar todos li dentro de ul
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText//devo usar o innerText para obter apenas a propriedade de texto
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()//para tirar os espaços
        listaDeTarefas.push(tarefaTexto)
    }  
    const tarefasJson = JSON.stringify(listaDeTarefas)//transforma o array em string 
    localStorage.setItem('tarefas', tarefasJson)//usso isso para recuperar novamente o JSON para array novamente
}
function adicionaTarefasSalvas() {
    if(!localStorage.getItem('tarefas')) return;
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)//converteu as tarefas de volta para array
    
    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas()
