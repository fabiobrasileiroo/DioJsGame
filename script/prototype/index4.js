const pessoa = {
  nome: 'Fabio',
  idade: 21
}
function gritar(prefixo) {
  console.log(prefixo, this.nome)
}
gritar.apply(pessoa, ['olaaaa'])
gritar.call(pessoa, 'olaa')
