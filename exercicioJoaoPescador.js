/*João, um pescador, gostaria de controlar o rendimento diário do seu trabalho.

Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca
do estado de SP(50KG) deve pagar uma multa de R$4,00 por quilo excedente. João precisa que você faça um script
que leia o peso de peixes de joão e verifica se há ou não excesso. Se houver, gravar na variável "excesso" e 
na variável "multa" o valor da multa que joão deverá pagar */

const limite = 50
const valordaMulta = 4
const pesoDePeixes = 55

let excesso =  pesoDePeixes > limite ? pesoDePeixes - limite : 0
let multa = excesso * valordaMulta

console.log("Excesso", excesso)
console.log("Multa", multa)