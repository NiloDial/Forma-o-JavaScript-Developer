// Funções exportadas

const entradas = [4.5];
let i = 0;

function gets() {
  const valor = entradas[i];
  i++;
  return valor;
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print }; // Exportando as duas funções
