// Desafio que determina valor para transferir de sálaio

const { gets, print } = require("./funcoes-auxiliares");

const valorBruto = gets();
const valorAdicional = gets();

function calcualrPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}

function PercentualImpostoComBaseNoSalario(salario) {
  if (salario <= 1100) {
    return 5;
  } else if (salario <= 2500) {
    return 10;
  } else {
    return 15;
  }
}

const ValorATransferir =
  valorBruto -
  calcualrPorcentagem(
    valorBruto,
    PercentualImpostoComBaseNoSalario(valorBruto)
  ) +
  valorAdicional;

print(ValorATransferir.toFixed(2));
