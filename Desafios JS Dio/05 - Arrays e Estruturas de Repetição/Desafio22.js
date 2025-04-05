// Calculando média de nota utilizando os itens do Array junto com uma estrutura de repetição
// Forma dinâmica

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

var soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];

  soma = soma + nota / notas.length;
}

console.log(soma.toFixed(2));
