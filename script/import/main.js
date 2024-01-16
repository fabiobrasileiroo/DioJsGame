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



//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Lê a quantidade de golpes informada pelo usuário. 
// O parseInt(()) vai converter os valores de entrada(string) para um valor numérico(Int).
const quantidadeGolpes = parseInt(gets());

// TODO: Defina aqui os tipos de minerais Carvao, Ferro, Diamante e Pedra
let minerais = [" Carvao", " Ferro", " Diamante", " Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 0; i < quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = minerais[i] //% minerais.length;
  
  // TODO: Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
  print(`${i+1}: ${minaIndex}`);
}