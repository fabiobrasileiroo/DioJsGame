class Tabuada {
  numero
  ateQueNumero
  constructor(numero, ateQueNumero) {
    this.numero = numero
    this.ateQueNumero = ateQueNumero
  }
  soma() {
    for (let i = 0; i <= this.ateQueNumero; i++) {
      let contas = []
      contas.push(this.numero + i)
      let soma = this.numero + contas.at()
      console.log(`${this.numero} + ${contas.at()} = ${soma}`)
    }
  }
  subtracao() {
    for (let i = 0; i <= this.ateQueNumero; i++) {
      let contas = []
      contas.push(this.numero * i)
      let soma = this.numero - contas.at()
      console.log(`${this.numero} - ${contas.at()} = ${soma}`)
    }
  }
  multiplicacao() {
    for (let i = 0; i <= this.ateQueNumero; i++) {
      let contas = []
      contas.push(this.numero * i)
      let soma = this.numero * contas.at()
      console.log(`${this.numero} X ${contas.at()} = ${soma}`)
    }
  }

  divisao() {
    for (let i = 0; i <= this.ateQueNumero; i++) {
      let contas = []
      contas.push(this.numero * i)
      let soma = this.numero /contas.at()
      console.log(`${this.numero} / ${contas.at()} = ${soma}`)
    }
  }
}
const calcular = new Tabuada(2, 10)
calcular.multiplicacao()

