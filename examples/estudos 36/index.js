const pessoas = [
    {id: 3, nome: 'Guilherme'},
    {id: 2, nome: 'jao'},
    {id: 1, nome: 'maria'}    
]
// const novasPessoas = {}
// for(const pessoa of pessoas) {
//     const {id} = pessoa
//     novasPessoas[id] = {...pessoa}
// }

const novasPessoas = new Map()
for(const pessoa of pessoas) {
    const {id} = pessoa
    novasPessoas.set(id, {...pessoa})
}
console.log(novasPessoas)