let nota1 =-10
let nota2 =0 
let nota3 = 2.2
const media = ((nota1+nota2+nota3)/3).toFixed(2)
if(media <0 || media >10) {
  console.log("valor invalido")
}else if( media < 5) {
  console.log("Reprovado com " + media);
} else if (media >=5 && media < 7 ) {
  console.log("Recuperação:",media);
} else if (media >= 7) {
  consolel.log("Passou com " + media)
}  