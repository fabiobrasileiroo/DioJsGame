class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
}

const lista = [new Pessoa('fabio'), new Pessoa('Renan'), new Pessoa('Joao')]

// const listaNomes = []

// for (let i = 0; i < lista.length; i++) {
//   const element = lista[i]
//   listaNomes.push(element.name)
// }
//const listaNomes = lista.map((element) => element.nome)
const listaEmHtml = lista.map((element)=> {
  return `
    <li>
      ${element.nome} 
    </li>
  `
})
console.log(listaEmHtml)