class Carros {
  marca;
  cor;
  gastoMedioDeCombustivelKmRodado;

  constructor(marca, cor, gastoMedioDeCombustivelKmRodado) {
    this.marca = marca
    this.cor = cor
    this.gastoMedioDeCombustivelKmRodado = gastoMedioDeCombustivelKmRodado
  }

  quilometraCombustivel(distanciaEnKm, precoCombustivel) {
    return distanciaEnKm * this.gastoMedioDeCombustivelKmRodado * precoCombustivel
  }
}

const uno = new Carros('Fiat', 'Prata',(1/12).toFixed(4))
console.log(uno.quilometraCombustivel(100, 5))
console.log(uno)