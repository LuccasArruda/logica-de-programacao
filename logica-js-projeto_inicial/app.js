alert('Boas vindas ao jogo do n�mero secreto!');
let numeroSecreto = 9;
console.log('N�mero Secreto: ' + numeroSecreto);
let chute = prompt('Escolha um n�mero entre 0 e 10:');

if (numeroSecreto == chute) {
    alert(`Parab�ns, Voc� acertou! o n�mero secreto ${numeroSecreto}`);
}
else{
    alert('Que pena, esse n�o era o n�mero secreto :(');
}