  const pessoa = {
    nome: "josé",
    idade: 20,
    casado: true,
    notas: [5,8,10],
    endereco: {
      rua: "Rua Allan Kardec",
      numero: 93,
      cidade: "Recife"
    }
  }


  console.log(pessoa["nome"])
  console.log(pessoa.nome)
  console.log(pessoa["idade"])
  console.log(pessoa["casado"])
  console.log(pessoa["notas"])
  console.log(pessoa["endereco"]["cidade"])
  console.log(pessoa.endereco.cidade)


  const array = [pessoa, pessoa]
  console.log(array )