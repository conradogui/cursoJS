const fs = require('fs').promises
const path = require('path')

// fs.readdir(path.resolve(__dirname))//faz a listagem dos arquivos e retorna um array com os arquivos presentes
//     .then(files => console.log(files))
//     .catch(e => console.log(e))

async function readdir(rootDir) { //faz a mesma coisa da função a cima
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir) { 
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath)

        if(/\.git/g.test(fileFullPath)) continue
        if(/node_modules/g.test(fileFullPath)) continue

        if(stats.isDirectory()) {
            readdir(fileFullPath)
            continue
        }
        if(!/\.html$/g.test(fileFullPath)) continue
        console.log(fileFullPath)
    }
}

readdir('C:\\Users\\gui14\\OneDrive\\Área de Trabalho\\work\\cursoJS')