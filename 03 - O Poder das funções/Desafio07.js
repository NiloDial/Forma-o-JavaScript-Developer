// Cálculo IMC com funções

function calculoImc(peso, altura) {
  return peso / (altura * altura);
}

function classificar(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc <= 25) {
    return "Peso normal";
  } else if (imc <= 30) {
    return "Acima do peso";
  } else if (imc <= 40) {
    return "Obeso";
  } else {
    return "Obesidade Grave";
  }
}

function main() {
  const peso = 80;
  const altura = 1.77;

  const imc = calculoImc(peso, altura);
  console.log(
    `Seu IMC é: ` + imc.toFixed(2) + ` Sua classificação: ` + classificar(imc)
  );
}

main();
