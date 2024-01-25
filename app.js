let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio'

function ExibirConsole() {
    console.log('O botão foi pressionado');
}

function ExibirMensagem() {
    alert('Eu amo JS')
}

function ExibirPrompt() {
    let cidade = prompt('Nome de uma cidade do brasil')
    alert('Estive em ' + cidade + ' e lembrei de voce')
}

function ExibirSoma() {
    let PrimeiroNumero = parseInt(prompt('Digite o numero'));
    let SegundoNumero = parseInt(prompt('Digite outro numero'));
    let soma = PrimeiroNumero + SegundoNumero;
    alert('Soma de dois numeros é ' + soma);
}