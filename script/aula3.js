function meuNome(nome) {
  return 'Escreva meu nome ' + nome
}


function vericarIdade(isAge) {
  if(isAge >= 18) {
    return ('Maior de idade ' + meuNome('fabio'))
  } else if (isAge <18) {
    return 'Maior de idade'+meuNome('fabio')
  }
}
console.log(vericarIdade(10))