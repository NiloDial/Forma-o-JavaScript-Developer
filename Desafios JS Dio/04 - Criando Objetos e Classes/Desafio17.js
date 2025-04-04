// Calcular IMC

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  imc() {
    return this.peso / (this.altura * this.altura);
  }

  classifica() {
    const imc = this.imc();

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
}

const jose = new Pessoa("Jose", 70, 1.75);

console.log(jose.imc().toFixed(2));

console.log(jose.classifica());
