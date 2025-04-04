// Objeto com Função

const dadosPessoa = {
  nome: "Lucas Alves",
  idade: 25,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);

    // Com o "this" é possível puxar os dados do objeto para dentro da função
  },
};

dadosPessoa.descrever();
