class Pessoas {
  nome;
  peso; 
  altura;
  constructor(nome, peso, altura){
    this.nome = nome
    this.peso = peso
    this.altura = altura
  }
  IMC() {
    return this.peso / Math.pow(this.altura,2)
  }

  classificarIMC() {
    const imc = this.IMC()
    if(imc < 18.5) {
      return("Abaixo do peso "+imc)
    } else if(imc >= 18.5 && imc < 25) {
      return("Peso normal "+imc)
    } else if(imc >= 25 && imc < 30) {
      return('Acima do peso '+imc) 
    } else if(imc >= 30 && imc < 40) {
      return('Obeso ' + imc)
    } else if(imc >= 40) {
      return('Obsesidade grave')
    }
  }
}

const fabio = new Pessoas('Fabio' ,65.7 , 1.70)
console.log(fabio.classificarIMC())