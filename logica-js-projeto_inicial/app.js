alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 6;
let chute = prompt('Escolha um número entre 0 e 10:');

if (numeroSecreto == chute) {
    alert('Parabéns, Você acertou! o número secreto é ' + numeroSecreto);
}
else{
    alert('Que pena, esse não era o número secreto :(');
}