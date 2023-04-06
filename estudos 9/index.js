const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Conrado',
    idade: 20,
    endereco: {
        rua: 'Rio Araguaia',
        numero: 395
    }
}
//Atribuição via desestruturação
const {endereco: {rua, numero}} = pessoa
console.log(rua, numero)
//Rio Araguaia 395