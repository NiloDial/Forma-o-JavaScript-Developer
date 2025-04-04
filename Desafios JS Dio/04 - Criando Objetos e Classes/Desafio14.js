// Classe com Constructor

class DadosPessoa {
  nome;
  idade;

  // O constructor vai definir um valor padrão para a instância
  constructor(nome, idade) {
    this.nome = "Teste";
    this.idade = 0;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);

    // Com o "this" é possível puxar os dados do objeto para dentro da função
  }
}

const vitor = new DadosPessoa(); // Instância vazia

const carlos = new DadosPessoa(); // Instância vazia

console.log(vitor);
console.log(carlos);
