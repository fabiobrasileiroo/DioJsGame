const entradas = [10,50,10,98,23]
let i = 0

function gets() {
  const valor = entradas[i];
  i++;
  return valor;
}

function print(texto) {
  console.log(texto);
}

//module.exports.gets = gets 
module.exports = {
  gets,
  print
}