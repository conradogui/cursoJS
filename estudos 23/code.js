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
    li.innerHTML += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerHTML = 'Apagar'
    //botaoApagar.classList.add('apagar')
    botaoApagar.setAttribute('class', 'Apagar')
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
    criaTarefa(inputTarefa.value)
})
document.addEventListener('click', function(e) {
    const el =e.target
    if(el.classList.contains('Apagar')) {
        el.parentElement.remove()
        salvarTarefas()
    }
})
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerHTML
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()//para tirar os espaços
        listaDeTarefas.push(tarefaTexto)
    }  
    const tarefasJson = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJson)
}