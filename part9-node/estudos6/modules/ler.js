const fs = require('fs').promises

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w'} )//mandei o caminho absoluto, os dados que vou escrever no arquivo e a flag w (apagar para criar um novo)
}
