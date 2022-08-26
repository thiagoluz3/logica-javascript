const qtdias = 63
const equacao1 = qtdias/30

const arred = Math.floor(equacao1)
const qtdDiastotal = arred * 30
const diasPassados = qtdias - qtdDiastotal

if(diasPassados == 0){
  console.log("Número do mês", arred)
console.log("Número de dias", diasPassados + 1)
}
else{
  console.log("Número do mês", arred)
console.log("Número de dias", diasPassados)
}




