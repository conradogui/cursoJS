const alunos = ['Luiz', 'Maria', 'Joao']

alunos.unshift('Luiza')//adiciona no inicio do array, ele deixa de ter luiz no inicio e passa a ser luiza
alunos.unshift('Fábio')//tira a luiza e passa a ser Fabio
let removido = alunos.pop() //ele tira um elemento do final do array
console.log(removido) //posso pegar o que foi removido e guardar ele como um dado
alunos.shift()//remove do inicio do array
delete alunos[1] //posso tirar um elemento 