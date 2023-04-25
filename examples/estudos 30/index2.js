const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosDobrados = numeros.map(valor => valor * 2)
console.log(numerosDobrados) //[ 10, 100, 160,  2,  4,  6, 10,  16,  14, 22, 30, 44, 54]

const pessoas = [
    {nome:'Luiz', idade: 62},
    {nome:'Maria' ,idade: 23},
    {nome:'Eduarda' ,idade: 55},
    {nome:'Leticia' ,idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade: 47}
]
//para cada elemento retorne apenas uma string com o nome da pessoa
const nomePessoa = pessoas.map(valor => valor.nome)
console.log(nomePessoa)//[ 'Luiz', 'Maria', 'Eduarda', 'Leticia', 'Rosana', 'Wallace' ]
//para cada elemento remova apenas a chave nome do objeto
const chave = pessoas.map(obj => ({idade: obj.idade})) //envolvi entre parenteses pois retornei a chave do objeto em uma expressão
console.log(chave)
/*
[
  { idade: 62 },
  { idade: 23 },
  { idade: 55 },
  { idade: 19 },
  { idade: 32 },
  { idade: 47 }
]
*/ 
//para cada elemento adicione uma chave ID em cada objeto
const comIds = pessoas.map(function (obj, indice) {
    const newObj = {...obj}//criei uma nova constante para não mexer no objeto original
    newObj.id = (indice + 1) * 124
    return newObj
})
console.log(comIds)
