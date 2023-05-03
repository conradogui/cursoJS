class Calculadora {
    constructor () {
        this.display = document.querySelector('.display')
        this.inicia = () => {
            this.apertaBotao()
            this.apertaEnter()
        }
        this.apertaEnter = () => {
            document.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        }
        this.apertaBotao = () => {
            document.addEventListener('click', e => {
                const el = e.target
                if(el.classList.contains('btn-num')) this.addNumDisplay(el)
                if(el.classList.contains('btn-clear')) this.limpa()
                if(el.classList.contains('btn-del')) this.del()
                if(el.classList.contains('btn-eq')) this.realizaConta()
            })
        }
        this.limpa = () => this.display.value = ''
        this.del = () => this.display.value = this.display.value.slice(0,-1)
        this.addNumDisplay = el => {
            this.display.value += el.innerText
            this.display.focus()//foco fica no display
        }
        this.realizaConta = () => {
            try {
                const conta = eval(this.display.value)
                if(!conta) {
                    alert('conta inválida')
                    return
                }
                this.display.value = conta
            } catch (e) {
                alert('Erro')
                return
            }
        }

    }
}
const calculadora = new Calculadora() //aqui ele cria o objeto real
calculadora.inicia()//aqui ele chama o metodo inicia, que é onde tudo começa