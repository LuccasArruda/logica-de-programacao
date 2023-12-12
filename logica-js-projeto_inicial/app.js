alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = parseInt(Math.random() * 10 + 1);
let chute;
let tentativas = 1;
console.log('Número Secreto: ' + numeroSecreto);

while (chute != numeroSecreto){
    let chute = prompt('Escolha um número entre 0 e 10:');
    if (numeroSecreto == chute) {
        break;
    }
    else{
        if (numeroSecreto > chute){
            alert(`Você errou! Mas aqui vai uma dica, o número secreto é MAIOR que ${chute}!`);
        }
        else {
            alert(`Você errou! Mas aqui vai uma dica, o número secreto é MENOR que ${chute}!`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Parabéns, Você acertou! o número secreto ${numeroSecreto}, e você acertou ele em ${tentativas} ${palavraTentativa}`);
