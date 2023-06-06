// const mod1 = require('./module') //estou importando o arquivo module para esse arquivo
const { NOME, sobrenome, falaNome} = require('./module') //posso ultilizar dessa forma também


console.log(NOME, sobrenome)
// const falaNome = mod1.falaNome

console.log(falaNome()) //aqui eu vou ter tudo que eu exportei do outro arquivo