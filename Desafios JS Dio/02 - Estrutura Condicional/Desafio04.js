// Cálculo IMC com If Else

const altura = 1.77;
const peso = 74;

const imc = peso / (altura * altura);

console.log(`Seu IMC é: ` + imc.toFixed(2));

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc <= 25) {
  console.log("Peso normal");
} else if (imc <= 30) {
  console.log("Acima do peso");
} else if (imc <= 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade Grave");
}
