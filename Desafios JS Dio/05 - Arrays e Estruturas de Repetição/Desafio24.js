// Estrutura For que percorre uma lista e encontra os números pares

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < lista.length; i++) {
  const numero = lista[i];

  if (numero % 2 === 0) {
    console.log(`O ${numero} é Par`);
  } else {
    console.log(`O ${numero} não é Par`);
  }
}
