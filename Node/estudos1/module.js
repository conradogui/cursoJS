const nome = 'Guilherme'
const sobrenome = 'Conrado'

const falaNome = () => nome + ' ' + sobrenome

// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome

// console.log(module.exports)
/*
{
  nome: 'Guilherme',
  sobrenome: 'Conrado',
  falaNome: [Function: falaNome]
}
*/
exports.NOME = nome //a chave NOME pode ser qualquer coisa, qualquer nome, mas o valor nome não
exports.sobrenome = sobrenome
exports.falaNome = falaNome
this.qualquerCoisa = 'O que eu quiser' //tambem vai ser exportada pois o this aponta para exports

