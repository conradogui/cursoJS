const produto = {nome: 'copo', preco: 3.50, material: 'ferro'}
for(let [chave, valor] of Object.entries(produto)) { //retorna uma array dos próprios pares [chave, valor] enumeráveis de um dado objeto, na mesma ordem dos objetos providos através do loop
    console.log(chave + ':', valor)
}