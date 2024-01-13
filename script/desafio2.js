
let priceEtanol = 3.5
let priceGasolina = 5.5
let tipoCombusitel = 'gasolina'
let gastoMedioKm =  10
let distanciaKm = 1000
const litrosConsumidos = distanciaKm / gastoMedioKm 

if(tipoCombusitel === 'gasolina' || 'Gasolina') {
  console.log(litrosConsumidos * priceGasolina)  
} else {
  console.log(litrosConsumidos * priceEtanol)
}