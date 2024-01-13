let peso = 65.7
let altura = 1.70
const imc = peso / Math.pow(altura,2)

if(imc < 18.5) {
  console.log("Abaixo do peso",imc)
} else if(imc >= 18.5 && imc < 25) {
  console.log("Peso normal",imc)
} else if(imc >= 25 && imc < 30) {
  console.log('Acima do peso',imc) 
} else if(imc >= 30 && imc < 40) {
  console.log('Obeso', imc)
} else if(imc >= 40) {
  console.log('Obsesidade grave')
}
