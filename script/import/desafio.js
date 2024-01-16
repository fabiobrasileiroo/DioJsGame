const {gets, print} = require('./aula')

const valorSalario = parseFloat(gets())
const valorBeneficios = parseFloat(gets())

const valorImposto = calcularImposto(valorSalario)
print(saida.toFixed(2))

function calcularImposto(salario) {
  let aliquota;
  if(salario > 0 && salario <= 1100) {
    aliquota = 0.05
  }
  return aliquota * salario
}
console.log(salario(2500))