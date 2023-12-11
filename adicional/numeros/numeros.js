let numeroSelecionado = prompt('Escolha um número:');

if (numeroSelecionado > 0){
    alert(`O Número ${numeroSelecionado} é um número positivo!`);
} else if (numeroSelecionado < 0){
    alert(`O Número ${numeroSelecionado} é um número negativo!`);
} else{
    alert(`Você escolheu o númeor 0, esse número não é nem positivo e nem negativo.`);
}