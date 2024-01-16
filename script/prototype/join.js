const lista = [1,2,3]

const lista1 = [{nome: 'fabio'}, {nome: 'Adressa'}, {nome: 'Vitors'}]

const listaNova = lista.join('-')
const listaMap  = lista1.map((e)=> e.nome).join('; ')
console.log(listaMap)
console.log(lista)
console.log(listaNova)

console.log(
  lista1.map(e => e.nome)
    .filter((e) => e.startsWith('A'))
    .join('; ')
)

const elementosEmHtml = lista1
  .filter((e) => e.nome.startsWith('A'))
  .map(e => `<li>${e.nome}</li>`)
  .join('')

console.log(elementosEmHtml)