const person = {

  name:"Thiago",
  lastName: "Luz"
}

//Object.keys(): Cria um array com todas as chaves do objeto

console.log(Object.keys(person))

// Object.values(): cria uma array com todos os valores do objeto

console.log(Object.values(person))

//Object.entries() -  cria um array com um array de objetos e valores
const array = Object.entries(person)
console.log(Object.entries(person))



const livros = {
  'Livro A' : 19.90,
  'Livro B' : 97.00,
  'Livro C' : 20.00
}

const values = Object.values(livros)
console.log(values)

const sum = values.reduce((val,acc) =>val+acc,0,0)

console.log(sum)