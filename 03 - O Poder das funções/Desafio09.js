// Média de notas com função

function media(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function classifica(resultado) {
  if (resultado < 5) {
    return `Sua média foi ` + resultado.toFixed(1) + ` você foi reprovado`;
  } else if (resultado <= 7) {
    return (
      `Sua média foi ` + resultado.toFixed(1) + ` você está de recuperação`
    );
  } else {
    return `Sua média foi ` + resultado.toFixed(1) + ` você foi aprovado`;
  }
}

function main() {
  const nota1 = 5;
  const nota2 = 5;
  const nota3 = 5;

  const resultado = media(nota1, nota2, nota3);

  console.log(classifica(resultado));
}
main();
