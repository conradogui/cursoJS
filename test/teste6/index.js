const pessoas = ["guilherme", "mariana", "joao", "carlos", "adilsonass", "paralelepipedo"]
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

//-----metodo filter-----
const nomesPequenos = pessoas.filter(valor => valor.length > 7)
// console.log(nomesPequenos)

//numeros pares
const numerosPares = numeros.filter(num => num % 2 === 0)
// console.log(numerosPares)

const nomeGrande = pessoas.filter(pessoa => pessoa.length > 5)
console.log(nomeGrande)

//-----metodo map------
//dobrar valores
const dobro = numeros.map(num => num*2)
// console.log(dobro)

const letraMaior = pessoas.map(pessoa => pessoa.toUpperCase())
// console.log(letraMaior)


