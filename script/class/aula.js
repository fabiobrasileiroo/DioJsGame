const alunos = ['João', 'Vitor','marina']

alunos.push('maria')//adicionando 
alunos.shift()
alunos.pop()

for(let i = 0; i < alunos.length; i++) {
  console.log(alunos[i])
}
const nome = 'Fabio Brasileiro'

const notas = []
notas.push(10)
notas.push(5)
notas.push(9)
let soma = 0
for(let i = 0; i < notas.length; i++) {
  const nota = notas[i]
  soma= soma + nota
}
const media = soma /notas.length
console.log(soma)
console.log(media)