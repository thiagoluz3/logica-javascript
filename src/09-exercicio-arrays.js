/* a prefeitura possui uma lista com a idade de cada morador e quer saber a quantidade
 de moradores que são eleitores obrigatórios, facultativos ou não eleitores de acordo com 
 as infos abaixo:

 obrigatório : 18 a 69 anos
 facultativo : 16 a 17 anos ou acima de 70 anos
 não eleitor : abaixo de 16 anos

 */

 const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99]

 let obrigatorio = 0
 let facultativo = 0
 let naoEleitor = 0

 for (let idade of lista){
  if (idade >=18 && idade <=69) obrigatorio++
  else if (idade < 16) naoEleitor++
  else facultativo++
 }

 console.log(facultativo)
 console.log(naoEleitor)
 console.log(obrigatorio)