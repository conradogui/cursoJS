class Formulario {
    constructor () {
        this.formulario = document.querySelector('.formulario')
        this.eventos()        
    }
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.camposSaoVaidos()
        const senhasValidas = this.senhasValidas()

        if(camposValidos && senhasValidas) {
            alert('Formulario enviado')
            this.formulario.submit()
        }
    }
    senhasValidas() {
        let vali = true

        const senha1 = document.querySelector('.senha1')
        const senha2 = document.querySelector('.senha2')

        if(senha1.value !== senha2.value) {
            this.erro(senha1, 'As senhas precisam ser iguais')
            this.erro(senha2, 'As senhas precisam ser iguais')
            vali = false
        }
        if(senha1.value.length < 4 || senha1.value.length > 20) {
            this.erro(senha1, 'As senhas precisam ter entre 4 e 20 caracteres')
            this.erro(senha2, 'As senhas precisam ter entre 4 e 20 caracteres')
            vali = false
        }
        return vali
    }
    camposSaoVaidos() {
        let vali = true

        for(let erro of this.formulario.querySelectorAll('.error-text')) {
            erro.remove()
        }

        for(let space of document.querySelectorAll('.validar')) {
            const label = space.previousElementSibling.innerHTML

            if(!space.value) {
                this.erro(space, `O espaço '${label}' precisa estar preenchido`)
                vali = false
            }
            if(space.classList.contains('cpf')) {
                if(!this.validaCpf(space)) vali = false
            }
            if(space.classList.contains('usuario')) {
                if(!this.validaUsuario(space)) vali = false
            }
            
        }
        return vali
    }
    validaUsuario(campo) {
        const usuario = campo.value
        let vali = true

        if(usuario.length < 3 || usuario.length > 12) {
            this.erro(campo, 'O usuario deve conter entre 3 e 12 caracteres')
            vali = false
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.erro(campo, 'O usuario deve conter letras e/ou numeros')
            vali = false
        }
        return vali
    }
    validaCpf(campo) {
        const cpf = new ValidaCpf(campo.value)

        if(!cpf.valida()) {
            this.erro(campo, 'CPF inválido')
            return false
        }
        return true
    }
    erro(campo, mensagem) {
        const div = document.createElement('div')
        div.innerHTML = mensagem
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend',div)
    }
}

const formulario = new Formulario()