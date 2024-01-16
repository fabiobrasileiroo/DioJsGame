const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo() {
  try {
    const arquivo = await fs.promises.readFile(filePath)
    const textoDoArquivo = arquivo.toString('utf8')
    console.log(textoDoArquivo)
  } catch(error) {
    console.log(error)
  } finally {
    console.log('finalizou')
  }
}
buscarArquivo()

// const promesaDaLeituraDoArquivo = fs.promises.readFile(filePath)

// promesaDaLeituraDoArquivo
//   .then((arquivo) => arquivo.toString('utf8'))
//   .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
//   .then((linhasSemOCabecalho)=> linhasSemOCabecalho.map((linha) => {
//     const [nome, feito] = linha.split(';')
//     return {
//       nome, 
//       feito: feito.trim() === 'true'
//     }
//   }))
//   .then((listaDeTarefas) => console.log(listaDeTarefas))
//   .catch((error) => console.log('Deu ruim!', error))