const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)

const geraMaiuscula = () => String.fromCharCode(rand(65, 91))//fromCharCode é o código do local do teclado
const geraMinuscula = () => String.fromCharCode(rand(97, 123))//fromCharCode é o código do local do teclado
const geraNumero = () => String.fromCharCode(rand(48, 58))//fromCharCode é o código do local do teclado

const simbolos = ',.!@#$%¨&*_-^~{}?+=:;'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)] //engloba todos os simbolos criados como um array

export default function geraSenha(qtd, maiu, minu, nume, simb) {
    const senhaArray = []
    qtd = Number(qtd)

    for(let i = 0; i < qtd; i++) {
        maiu && senhaArray.push(geraMaiuscula())
        minu && senhaArray.push(geraMinuscula())
        nume && senhaArray.push(geraNumero())
        simb && senhaArray.push(geraSimbolo())
    }

    return senhaArray.join('').slice(0, qtd)
}