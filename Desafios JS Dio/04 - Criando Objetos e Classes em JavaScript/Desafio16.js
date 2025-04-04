// Calcular valor gasto em combustível

class Carros {
  marca;
  cor;
  autonomia;

  constructor(marca, cor, autonomia) {
    this.marca = marca;
    this.cor = cor;
    this.autonomia = autonomia;
  }

  calcularGasto(distancia, preco) {
    return distancia * this.autonomia * preco;
  }
}

const carro1 = new Carros("VW", "Vermelha", 1 / 12);
const carro2 = new Carros("Fiat", "Preto", 1 / 10);

console.log(carro1.calcularGasto(70, 5).toFixed(2));
console.log(carro2.calcularGasto(70, 5).toFixed(2));
