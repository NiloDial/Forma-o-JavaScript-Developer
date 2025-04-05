// Exemplo de funções que seram exportadas

function gets() {
  return 10;
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print }; // Exportando as duas funções
