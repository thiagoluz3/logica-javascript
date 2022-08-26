const pessoa = {
  nome: "Thiago",
  sobrenome: "lUZ",
  idade: 27
}

const { nome, idade  } = pessoa
// const nome = pessoa.nome
//const idade = pessoaidade
console.log(nome)
console.log(idade)

const array = [1,2,3,4]
const[a,b,c,d] = array
console.log(d)

const newArray = [0,...array,5]
console.log(newArray)


const pessoaComMaisDados = {

  ... pessoa,
  idade:30,
  senha: "456"

}

console.log(pessoaComMaisDados)