// EXERCÍCIO 01
function inverteArray(array) {
  const arrayInvertido = array.map((valor, i) => {
    return array[array.length - 1 -i]
  })
  return arrayInvertido

}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const numerosPares = array.filter((item) => {
    return item % 2 === 0
        
  })
  const resultado = numerosPares.map((item2) => {
    return item2 * item2
  })
  return resultado
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayPar = []
  for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0){
      arrayPar.push(array[i])
    }
  }
  return arrayPar
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] > maiorNumero) {
      maiorNumero = array[i]
    }
  }
return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  
return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true //T
  const booleano2 = false //F
  const booleano3 = !booleano2 // T 
  const booleano4 = !booleano3 //F
  
  let respostas = [false, false, true, true, true]
  return respostas
  
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let i = 0
  let arrayResposta = []
  while(i<n){
    arrayResposta.push(i*2)
    i++
  }
  return arrayResposta


}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a === b && b === c && c === a) {
    return 'Equilátero'
  }else if (a === b && a !== c) {
     return 'Isósceles'
  } else if (a !== b && b !== c && c !== a){
     return 'Escaleno'

  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  function maiorNumero(num1, num2) {
    if (num1 > num2) {
      return num1
    } else {
      return num2
    }
  }
  function menorNumero(num1, num2) {
    if (num1 < num2) {
      return num1
    } else {
      return num2
    }
  }
  function maiorDivisivel(num1,num2) {
    if((maiorNumero(num1,num2) % menorNumero(num1,num2)) === 0) {
      return true
    } else{
      return false
    }
  }
  function diferencaNumeros(num1,num2) {
    const diferencaNumeros = (maiorNumero(num1,num2) - menorNumero(num1,num2))
    return diferencaNumeros
  }
  
  // Formato do objeto a ser retornado:
  const resultado = {
    maiorNumero: maiorNumero(num1,num2),
    maiorDivisivelPorMenor: maiorDivisivel(maiorNumero(num1,num2),menorNumero(num1,num2)),
    diferenca: diferencaNumeros(num1,num2),
  }
  return resultado
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

  let arrayResposta = []
  let menorNumero = Infinity
  let maiorNumero = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i]
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] < menorNumero) {
      menorNumero = array[i]
    }
  }
  
  arrayResposta.push(maiorNumero)
  arrayResposta.push(menorNumero)
return arrayResposta
}

// EXERCÍCIO 11
function ordenaArray(array) {
  const ordenado = array.sort(function(a, b){
    return a - b
  })
  return ordenado
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filmeAstrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  }
return filmeAstrodev
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filmeAstrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  }
 
  return `Venha assistir ao filme ${filmeAstrodev.nome}, de ${filmeAstrodev.ano}, dirigido por ${filmeAstrodev.diretor} e estrelado por ${filmeAstrodev.atores[0]}, ${filmeAstrodev.atores[1]}, ${filmeAstrodev.atores[2]}, ${filmeAstrodev.atores[3]}.`

}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const objetoRetangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
  return objetoRetangulo

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const pessoa1 = {
    nome: "João",
    idade: 34,
    email: "jrferrao@gmail.com",
    endereco: "Rua do Futuro, 4"
  }
  const anonimo = {
    ...pessoa,
    nome: "ANÔNIMO",
  }
  return anonimo
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  
  const usuarios = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 } 
  ]

  let maiorDeIdade = arrayDePessoas.filter((arrayDePessoas) => {
    return arrayDePessoas.idade >= 18
  })

  return maiorDeIdade
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  let menorDeIdade = arrayDePessoas.filter((arrayDePessoas) => {
    return arrayDePessoas.idade < 18
  })

  return menorDeIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const multiplicaPorDois = array.map((numero) => {
    return numero * 2
  })
  return multiplicaPorDois
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const multiplicaPorDois = multiplicaArrayPor2(array)
  const multiplicaPorDoisString = multiplicaPorDois.map((numero) => {
    return numero.toString()
  })
  return multiplicaPorDoisString
  
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const paridade = array.map((numero) => {
    if(numero % 2 === 0) {
      return `${numero} é par`
    } else {
      return `${numero} é ímpar`
    }
  })
  return paridade
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const autorizadas = pessoas.filter((condicao) => {
    if ((condicao.altura >= 1.5) && (condicao.idade > 14) && (condicao.idade < 60)) {
      return condicao
    }
  })
  return autorizadas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const naoAutorizadas = pessoas.filter((condicao) => {
    if (!((condicao.altura >= 1.5) && (condicao.idade > 14) && (condicao.idade < 60))) {
      return condicao
    }
  })
  return naoAutorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
 
  const nomesEmOrdem = consultasNome.sort(function(a,b) {
    return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0)
  })
  return nomesEmOrdem

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  function consultarData(a,b) {
    return a.dataDaConsulta < b.dataDaConsulta 
  }

  return consultasData.sort(consultarData)
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  for (let i=0; i<contas.length; i++){
    let somaGastos = 0    
    for (gastos of contas[i].compras){
      somaGastos += gastos
    }
    contas[i].saldoTotal = contas[i].saldoTotal - somaGastos
    console.log(contas[i].saldoTotal)
  }
  return contas
}
