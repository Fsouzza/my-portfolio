const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        validaform(evento.target)
    })
});


function validaform(input){
    const tipoDeInput = input.dataset.tipo

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
};



const tiposDeErro = [
    'valueMissing',
    'patternMismatch',
    'customError'
]


const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo de nome está vazio.',
        patternMismatch: 'Campo deve conter nome e sobrenome.'
    },
    email: {
        valueMissing: 'O campo de email está vazio.',
        patternMismatch: 'Digite um e-mail válido.'
    },
    projeto: {
        valueMissing: 'O campo titulo do projeto está vazio.'
    },
    mensagem: {
        customError: 'O campo mensagem está vazio.'
    }
};


function mostraMensagemDeErro(tipoDeInput, input) {
    var mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    
    return mensagem
}