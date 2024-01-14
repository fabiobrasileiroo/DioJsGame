//const funcoes = require('./aula') //
const {gets, print} = require('./aula')

//const numerosSorteados = []
const quantidadeDeAlunos = gets()
print(quantidadeDeAlunos)
let maiorValor = 0;

for (let i = 0; i < 5; i++) {
  const numerosSorteado = gets()
  if (numerosSorteado > maiorValor) {
    maiorValor = numerosSorteado
  }
}

// let maiorValor = 0

// for(let i = 0; i< numerosSorteados.length;i++) {
//   const numerosSorteado = numerosSorteados[i]
//   if(numerosSorteado > maiorValor) {
//     maiorValor = numerosSorteado
//   }
// }
print(maiorValor)
//console.log(funcoes.gets())

// const pessoa = {
//   nome: 'fabio'
// }

// const { nome } = pessoa // usando o destructy
// console.log(nome)

//const nome = pessoa.nome // mesma delaracao de cima 