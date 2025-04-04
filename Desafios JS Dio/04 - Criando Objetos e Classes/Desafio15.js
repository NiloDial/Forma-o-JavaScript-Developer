// Exemplo de função usando a estrutura da classe

class DadosPessoa {
  nome;
  idade;

  // O constructor vai definir um valor padrão para a instância
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

function compararIdade(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho que ${p1.nome}`);
  } else {
    console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`);
  }
}

const vitor = new DadosPessoa("vitor", 25); // Instância com "nome" e "idade"

const carlos = new DadosPessoa("carlos", 25); // Instância com "nome" e "idade"

compararIdade(vitor, carlos);
