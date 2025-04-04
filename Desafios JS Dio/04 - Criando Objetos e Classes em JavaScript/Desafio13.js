// Criando uma classe

// Uma classe é um modelo de como as informações vão ser distribuidas
class DadosPessoa {
  nome;
  idade;

  descrever() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);

    // Com o "this" é possível puxar os dados do objeto para dentro da função
  }
}

// Instância de uma objeto

const vitor = new DadosPessoa();
vitor.nome = "Vitor N Dias";
vitor.idade = "20";

const carlos = new DadosPessoa();
carlos.nome = "Carlos D Lua";
carlos.idade = "50";

console.log(vitor);
console.log(carlos);
