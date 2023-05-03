const produto = {nome: 'copo', preco: 3.50, material: 'ferro'}
for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}