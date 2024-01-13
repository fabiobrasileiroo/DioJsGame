function calculoIMC(peso,altura) {
  return peso / Math.pow(altura,2)
}
function classificarIMC(imc) {
  if(imc < 18.5) {
    return("Abaixo do peso",imc)
  } else if(imc >= 18.5 && imc < 25) {
    return("Peso normal",imc)
  } else if(imc >= 25 && imc < 30) {
   return ('Acima do peso',imc) 
  } else if(imc >= 30 && imc < 40) {
    return ('Obeso', imc)
  } else if(imc >= 40) {
    return('Obsesidade grave')
  }
}


(function main() {
  // peso, altura
  const peso = 75
  const altura = 1.75

  const imc = calculoIMC(peso, altura)
  console.log(classificarIMC(imc))
  })() // a função criar e se executar 