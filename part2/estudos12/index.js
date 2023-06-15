//for in-> lê os índices(array) ou chaves(objeto) do objeto
//for clássico: Geralmente com iteráveis( arrays ou strings)
//for in: Retorna o índice ou chave (strings, arrays e objetos)
//for of: retorna o valor em si (iteráveis, arrays ou strings)
const frutas = ['Pera', 'Uva', 'Maçã']
for(let i in frutas) {
    console.log(frutas[i])
}
/*Pera
Uva
Maçã*/ 
for(let valor of frutas) {
    console.log(valor)
}
/*Pera
Uva
Maçã*/
frutas.forEach(function(el) {
    console.log(el)
}) 
/*Pera
Uva
Maçã*/