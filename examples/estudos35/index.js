//Prototype e factory functions
// function criaPessoa(nome, sobrenome) {
//     const pessoa = {
//         falar() {
//             console.log(`${this.nome} está falando`)
//         },
//         comer() {
//             console.log(`${this.nome} está comendo`)
//         },
//         beber() {
//             console.log(`${this.nome} está bebendo`)
//         }
//     }
//     return Object.create(pessoa, {
//         nome: {value: nome},
//         sobrenome: {value: sobrenome}
//     })
// }

// const p1 = criaPessoa('Guilherme', 'Conrado')
// console.log(p1)

//SEGUNDA MANEIRA
function criaPessoa(nome, sobrenome) {
    return Object.create(pessoa, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}
const falar = {
    falar(){
        console.log(`${this.nome} está falando`)
    }
}
const comer = {
    comer(){
        console.log(`${this.nome} está comendo`)
    }
}
const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}

const pessoa = {...falar, ...comer, ...beber} //Aqui eu poderia ter usado Object.assign({}, comer, beber) ao inves do spread operator

const p1 = criaPessoa('Guilherme', 'Conrado')
console.log(p1)