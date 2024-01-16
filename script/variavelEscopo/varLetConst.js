// é içado, mas vem undefined
if (true) {
  var var1 = 10
}

function sla() {
  if(true) {
    var var3 =  10// aqui ele nao vazar
  }
}

let global = 10

function teste() {
  global = 20
  return  global
}
console.log(teste())

console.log(global)

let objeto = new Boolean(true)
console.log(typeof objeto)
console.log(typeof false)

const nome = ''
if(nome) {
  console.log('vai entender')
}

const x = Symbol('10')// ele objeto imutavel unico
const y = Symbol('10')
console.log(x == y) // por isso dar false 

const a = {
  nome: 'fabio',
  idade: 21,
  falei: () =>{
    console.log(this.idade)
  }
}
a['nome']= 'jose'
a.falar = () => {
  console.log('falou')
}
console.log(a)
a.falar()

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
