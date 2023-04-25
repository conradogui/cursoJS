//nomes.splice(indice atual, indice que vou remover, elem1, elem2, elem3) --> os elem é os que vou adicionar no lugar do removido
//              -4       -3         -2          -1  
//               0        1          2           3
const nomes = ['joao', 'maria', 'guilherme', 'carlos']
//const removidos = nomes.splice(-2, 1) --> [ 'joao', 'maria', 'carlos' ] [ 'guilherme' ]
//const removidos = nomes.splice(-2, Number.MAX_VALUE) --> [ 'joao', 'maria' ] [ 'guilherme', 'carlos' ]
//posso ultilizar o Number.MAX_VALUE para representar a quantidade maxima de itens que irei remover
const removidos = nomes.splice(2, 0, 'Jamaica')
//caso eu colocasse 1 ao inves de 0 no exemplo acima, eu iria remover um item (no caso 'guilherme') e adicionaria Jamaica
console.log(nomes, removidos)// [ 'joao', 'maria', 'Jamaica', 'guilherme', 'carlos' ] [] --> não foi removido nada e no indice 2 adicionei Jamaica


