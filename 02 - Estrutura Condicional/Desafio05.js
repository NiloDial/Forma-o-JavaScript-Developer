// Valores de pagamento com If Else

const preco = 10;

const porcentagem10 = preco * 0.1;
const porcentagem15 = preco * 0.15;

const codigo = "3x";

if (codigo === "Débito") {
  console.log(
    `À vista no débido com 10% de descoto fica: ` +
      `R$:` +
      (preco - porcentagem10)
  );
} else if (codigo === "Dinheiro" || codigo === "Pix") {
  console.log(
    `À vista no dinheiro ou pix com 15% de descoto fica: ` +
      `R$:` +
      (preco - porcentagem15)
  );
} else if (codigo === "2x") {
  console.log(`Em duas vezes, preço base, sem juros: ` + `R$:` + preco);
} else {
  console.log(
    `Mais de duas vezes, juros de 10%: ` + `R$:` + (preco + porcentagem10)
  );
}
