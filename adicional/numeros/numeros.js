let numeroSelecionado = prompt('Escolha um n�mero:');

if (numeroSelecionado > 0){
    alert(`O N�mero ${numeroSelecionado} � um n�mero positivo!`);
} else if (numeroSelecionado < 0){
    alert(`O N�mero ${numeroSelecionado} � um n�mero negativo!`);
} else{
    alert(`Voc� escolheu o n�meor 0, esse n�mero n�o � nem positivo e nem negativo.`);
}