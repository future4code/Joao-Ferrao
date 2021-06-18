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
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
