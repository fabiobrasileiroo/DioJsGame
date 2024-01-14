class Pessoa {
  nome;
  idade;
  anoDeNascimento
  constructor(nome, idade) {// o primeiro a ser chamado é o construtor
    this.nome = nome
    this.idade = idade
    this.anoDeNascimento = new Date().getFullYear() - idade
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
  }

}

function compararPessoas(p1, p2) {
  if(p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
  } else if(p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
  }
}

const fabio = new Pessoa('Fábio',21)
const josefa = new Pessoa('Josefa', 57)
compararPessoas(fabio,josefa)

// const fabio = new Pessoa('Fabio',29)// aqui eu instacio

// const josefa = new Pessoa()
// josefa.nome = "josefa"
// josefa.idade = 57

// console.log(fabio)
// console.log(josefa)
// josefa.descrever()