// Exerxícios Gasto de combustível

const gasolina = 5.79;
const autonomia = 10;
const distancia = 100;

var litrosUsados = distancia / autonomia;

var resultado = litrosUsados * gasolina;

console.log(resultado);

//Valor arredondado

console.log(resultado.toFixed(2));
