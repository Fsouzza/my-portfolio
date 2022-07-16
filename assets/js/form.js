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
        valueMissing: 'The name field is empty.',
        patternMismatch: 'Enter your first and last name.'
    },
    email: {
        valueMissing: 'The email field is empty.',
        patternMismatch: 'This email is not valid.'
    },
    projeto: {
        valueMissing: 'The project field is empty.'
    },
    mensagem: {
        customError: 'The message field is empty.'
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