// Funções exportadas

const entradas = [10, 50, 10, 98, 23, 55, 87, 100, 99, 21];
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
