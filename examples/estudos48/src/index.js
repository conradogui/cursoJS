//esse é meu modulo principal que eu importo tanto o javascript quanto o css
import GeraCPF from './modules/geracpf'

import './assets/css/style.css'

(function() { //nessa função eu so fiz logar o cpfGerado para dentro da div criada
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerHTML = gera.geraNovoCpf()
})()