//Filter -> sempre retorna um array com a mesma quantidade de elementos ou menos
//retornar os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
/*
for(let numero of numeros){
    if(numero > 10) {
        console.log(numero) --> [ 50, 80, 11, 15, 22, 27 ]
    }
}
*/                                               
const numerosFiltrados = numeros.filter(valor => valor > 10) //se acostumando com as arrow functions
console.log(numerosFiltrados)// [ 50, 80, 11, 15, 22, 27 ]

const pessoas = [
    {nome:'Luiz', idade: 62},
    {nome:'Maria' ,idade: 23},
    {nome:'Eduarda' ,idade: 55},
    {nome:'Leticia' ,idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade: 47}
]
//retornar as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5)
console.log(pessoasComNomeGrande)
//retorna as pessoas que tem mais de 50 anos
const pessoasVelhas = pessoas.filter(valor => valor.idade > 50)
console.log(pessoasVelhas)
//pessoas que terminam com a letra a
const pessoasComa = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'))
console.log(pessoasComa)