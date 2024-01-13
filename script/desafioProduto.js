// price - (price * 0.1)
function Descontar(price,metodeDePagamento){
  
  if (metodeDePagamento == '1') {
    let vistaDebito = price * 0.90
    console.log(vistaDebito)
  } else if (metodeDePagamento == '2') {
    let vistaMoney = price * 0.85
    console.log(vistaMoney)
  } else if ( metodeDePagamento == '3') {
    let duasVezes = price
    console.log(duasVezes)
  }
  else if(metodeDePagamento == '4') {
    let acimaDuasVezes = price * 1.10
    console.log(acimaDuasVezes)
  }
}

Descontar(100,  '4')

let metodeDePagamento = '4'
let price = 100