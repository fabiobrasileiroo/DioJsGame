const pessoa = {
  descricao: 'sou programador',
  genero: 'masculino'
}
const renan = {
  nome: 'renan',
  idade: 30,
  __proton__: pessoa
}

console.log(pessoa.genero)

function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
}

Pessoa.prototype.falar = function () {
  console.log(`Meu nome é: ${this.nome}`)
}
const fabio = new Pessoa('fabio',21)
console.log('\n',fabio)
fabio.falar()
//prototipe igual classe 
class PessoaClasse {
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }

  falar() {
    console.log(`Meu ome é: ${this.nome}`)
  }
}

const pessoas ={
  genero: 'masculino'
}
const jo = Object.create(pessoas)
console.log(jo.genero)

