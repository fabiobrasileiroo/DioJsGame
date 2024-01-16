function funcao1() {
  console.log(this)
}

const funcao2 = () => {
  console.log(this)
}

const fabio = {
  nome: 'Fabio',
  funcao1,
  funcao2
}

fabio.funcao1()// teve contexto 
fabio.funcao2()// e esse não teve