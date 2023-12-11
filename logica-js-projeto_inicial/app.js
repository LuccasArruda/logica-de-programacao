alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 9;
console.log('Número Secreto: ' + numeroSecreto);
let chute = prompt('Escolha um número entre 0 e 10:');

if (numeroSecreto == chute) {
    alert(`Parabéns, Você acertou! o número secreto ${numeroSecreto}`);
}
else{
    alert('Que pena, esse não era o número secreto :(');
}