function Pessoa (nome,sobrenome) {
  let pessoa ={
    nome,
    sobrenome
  }
  pessoa.nomeCompleto = `${nome} ${sobrenome}`
  return pessoa
}

const pessoaA = Pessoa("Thiago", "Luz")
const pessoaB = Pessoa("Alisse", "Maria")

console.log(pessoaA, pessoa B)
console.log("NOME COMPLETO PESSOA A", pessoaA.nomeCompleto)