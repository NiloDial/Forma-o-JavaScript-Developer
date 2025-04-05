// Desafio para determinar o maior número Par e o menor Impar

const { gets, print } = require("./funcoes-auxiliares");

const numeros = gets();

let maiorNumPar = 0;
let menorNumImpar = 0;

for (let i = 0; i < numeros; i++) {
  const numero = gets();

  if (numero % 2 === 0) {
    if (numero > maiorNumPar) {
      maiorNumPar = numero;
    }
  } else {
    if (menorNumImpar === 0) {
      menorNumImpar = numero;
    } else if (numero < menorNumImpar) {
      menorNumImpar = numero;
    }
  }
}

print(`O maior número Par é: ${maiorNumPar}`);
print(`O menor número Impar é: ${menorNumImpar}`);
