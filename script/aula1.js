function sayMyName(nome) {
  console.log('Seu nome é', nome)
}
sayMyName('fabio')

function incrementarJuros(valor, percetualJuros) {
  const valorDeAcrecimo = (percetualJuros/ 100) * valor;
  return valor + valorDeAcrecimo
}
console.log(incrementarJuros(100, 10))