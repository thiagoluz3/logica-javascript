/*
Elabora um alg. que dada a idade de um nadador
classifique-o em uma das seguintes categorias:

infantil A = 5 a 7 anos
infantil B = 8 a 11 anos
juvenil A = 12 a 13 anos
juvenil b = 14 a 17 anos
adultos = maiores de 18 anos

operadores lógicos

OU || - A CONDIÇÃO É VERDADEIRA SE UM OU OUTRO FOR VERDADEIRO
E $$ - A CONDIÇÃO É VERDADEIRA SE TODOS FOREM VERDADEIROS

*/

const idade = 15

if (idade >=5 && idade <=7){
  console.log("Infantil A")
}
else if (idade>=8 && idade<=11){
  console.log("Infantil B")
}
else if (idade>=12 && idade<=13){
  console.log("Juvenil A")
}
else if (idade>=14 && idade<=17){
  console.log("Juvenil B")
}
else if (idade>=18){
  console.log("Adultos")
}
