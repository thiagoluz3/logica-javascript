const array = [1,5,4,3,10,7,8,20,12]

array.forEach((elemento, posicao ) => {
  console.log(`${elemento} - posicao ${posicao}`)
})



//find : retorna o elemento

const valor = array.find((elemento) => {
  return elemento === 10

})

console.log(valor)

//findindex : retorna o index

const index = array.findIndex((elemento) =>  elemento === 10)

console.log(index)


//some : retorna true se pelo menos um número satisfaz a condição
const some = array.some((elemento) => (elemento >=21))

console.log(some)

//every - retorna true se todos os números respeitarem a condição
const every = array.every((elemento) => (elemento >=1))
 console.log(every)

//splice : corta o array, o primeiro parâmetro é o início e o segundo é a quantidade
 const newArray = [1,2,3,4,5]

 console.log(newArray.splice(2,2))

 //map: alterar os valores dentro do array seguindo uma regra.
 const newArray1 = [1,2,3,4,5]
 console.log(newArray1.map((elemento) =>{
  return elemento*2
 }))

 ///filter : filtrar o elemento dentro do array

 console.log(newArray.filter((elemento) =>{
return elemento %2 === 0

 }))

 //reduce: reduz o array para algum outro elemento

 console.log(newArray1.reduce((acumulado, elemento) =>{

  return acumulado + elemento
 }, 100))