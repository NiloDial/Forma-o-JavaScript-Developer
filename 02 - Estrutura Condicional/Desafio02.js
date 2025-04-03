// Exerxícios Gasto de combustível com If Else

const alcool = 0;
const gasolina = 5.75;

const autonomiaAlcool = 8;
const autonomiaGasolina = 10;

const distancia = 100;

var litrosUsadosAlcool = distancia / autonomiaAlcool;
var litrosUsadosGasolina = distancia / autonomiaGasolina;
var resultadoAlcool = litrosUsadosAlcool * alcool;
var resultadoGasolina = litrosUsadosGasolina * gasolina;

if (alcool > 0) {
  console.log(resultadoAlcool.toFixed(2));
} else {
  console.log(resultadoGasolina.toFixed(2));
}
