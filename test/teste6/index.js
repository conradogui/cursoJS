const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const pares = numeros.filter(num => num % 2 == 0)
const dobra = pares.map(num => num * 2)
const soma = dobra.reduce((acumulador, valor) => acumulador += valor)

console.log(soma)


