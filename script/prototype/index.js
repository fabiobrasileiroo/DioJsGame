function falarMeuNome() {
  console.log('Meu nome é Fabio')
}

function falarMeuNomeCompleto(falarMeuNome) {
  falarMeuNome()
  console.log('Josefa')
  return falarMeuNome
}

falarMeuNomeCompleto(falarMeuNome)()