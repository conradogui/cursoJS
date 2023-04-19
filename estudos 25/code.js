function criaCalculadora() {    
    return {
        display: document.querySelector('.display'),
        ligando() {
            this.apertaBotao()
            this.apertaEnter()
        },
        apertaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.resultadoFinal()
                }
            })
        },
        apagaTudo() {
            this.display.value = ''
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },
        resultadoFinal() {
            let conta = this.display.value

            try {
                conta = eval(conta)

                if(!conta) {
                    alert('ERROR')
                    return
                }
                this.display.value = conta
            } catch (e) {
                alert('ERROR')
                return
            }
        },
        apertaBotao() {
            document.addEventListener('click',  e => {
                const el = e.target

                if(el.classList.contains('btn-num')) {
                    this.botaoParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')){
                    this.apagaTudo()
                } 
                if(el.classList.contains('btn-del')) {
                    this.apagaUm()
                }  
                if(el.classList.contains('btn-eq')) {
                    this.resultadoFinal()
                }                             
            })
        },
        botaoParaDisplay(valor) {
            this.display.value += valor
        },
    }
}
const calculadora = criaCalculadora()
calculadora.ligando()
