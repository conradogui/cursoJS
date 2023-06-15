export const nome = 'guilherme'
export const sobrenome = 'conrado'
export const idade  = 21

export default function soma(x, y) {
    return x + y
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

// export { nome, sobrenome, idade, soma, Pessoa} -> posso exportar assim, ou diretamente na criação do codigo

