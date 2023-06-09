class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }
    eventos () {
        this.formulario.addEventListener('submit' , e => {
            this.handleSubmit(e)
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas()

        if(camposValidos && senhasValidas) {
            alert('Formulário enviado')
            this.formulario.submit()
        }
    }
    senhasSaoValidas() {
        let valid = true
        const senha1 = this.formulario.querySelector('.senha1')
        const senha2 = this.formulario.querySelector('.senha2')
        
        if(senha1.value !== senha2.value) {
            valid = false
            this.criaErro(senha1, 'Campos senha e repetir senha precisam ser iguais')
            this.criaErro(senha2, 'Campos senha e repetir senha precisam ser iguais')
        }
        if(senha1.value.length < 6 || senha1.value.length > 12) {
            valid = false
            this.criaErro(senha1, 'Senha precisa estar entre 6 e 12 caracteres')
        }

        return valid
    }
    camposSaoValidos() {
        let valid = true
        
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }
        
        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerHTML // o previousElementSibling retorna o elemento imediatamente anterior na lista de filhos de seu pai
            
            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar vazio`)
                valid = false
            }
            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false
            }
        }
        return valid
    }
    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres')
            valid = false
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) { //expressão regular (essa expressão checa se o usuario so possui letras(maiusculas e/ou minusculas) ou numeros)
            this.criaErro(campo, 'Nome de usuario precisa conter letras e/ou numeros')
            valid = false
        }
        return valid
    }
    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido')
            return false
        }
        return true
    }
    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)// o insertAdjacentElement insere um determinado nó de elemento em uma determinada posição relativa ao elemento sobre o qual é invocado. (insertAdjacentElement(position, element))

    }
}
const form = new ValidaFormulario()