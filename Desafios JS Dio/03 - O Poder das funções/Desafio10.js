// Valores de pagamento com Funções

function desconto10() {
  return preco * 0.1;
}

function desconto15() {
  return preco * 0.15;
}

function classifica() {
  if (codigo === "Débito") {
    return (
      `À vista no débido com 10% de descoto fica: ` +
      `R$:` +
      (preco - desconto10())
    );
  } else if (codigo === "Dinheiro" || codigo === "Pix") {
    return (
      `À vista no dinheiro ou pix com 15% de descoto fica: ` +
      `R$:` +
      (preco - desconto15)
    );
  } else if (codigo === "2x") {
    return `Em duas vezes, preço base, sem juros: ` + `R$:` + preco;
  } else {
    return (
      `Mais de duas vezes, juros de 10%: ` + `R$:` + (preco + desconto10())
    );
  }
}

const preco = 100;

const codigo = "3x";

console.log(classifica());
