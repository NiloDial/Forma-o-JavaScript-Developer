// Desafio que recebe a média de um aluno

const { gets, print } = require("./funcoes-auxiliares");

const media = gets();

function classifica() {
  if (media < 5) {
    return `Sua médoa foi ${media} você está reprovado`;
  } else if (media < 7) {
    return `Sua médoa foi ${media} você está de recuperação`;
  } else {
    return `Sua médoa foi ${media} você está aprovado`;
  }
}

print(classifica());
