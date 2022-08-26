let array = [true, false, 1 , 2 , "sejadev"]

console.log(array)
array.pop() // remove o ultimo
console.log(array)
array.push(1000, "string") // adiciona no array
console.log(array)

let newArray = [10, 20, 30]
let i = 0

while (i < newArray.length) {
  console.log(i)
  console.log(newArray[i])
  i++
}

for (let pos = 0; pos < newArray.length; pos++){
  //console.log(newArray[pos])
}

//for ..in
for (let pos in newArray) {
 // console.log(pos)
 // console.log(newArray[pos])
}

// for .. of
/*
for (let arr of newArray) {

  console.log(arr)
}
*/


/*
Dado um array com X números, encontrar a media desses números
*/

const numbers = [10,20,30,40]
let sum = 0

for (let num of numbers) {
  sum = sum + num
}
const media = sum / numbers.length  
console.log(sum)
console.log (media)