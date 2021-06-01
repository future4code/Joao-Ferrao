// console.log("Hello World!")

// Exercicios de interpretação de código

// 1- 
// a-
// 10
// 50

// b-
// Daria erro

// 2-
// a-
//  essa função deixa a frase toda em letras minusculas. E inclui a palavra "cenoura" ao final

// b-
// a saída não seria nenhuma das opções dado o fato de que mesmo possuindo a palavra cenoura, nenhuma das opções está totalmente em lower case

// Exercicios de escrita de código

//1
//a-

// let imprimirFrase = () => {
//     console.log("Eu sou João, tenho 34 anos, moro em Brasilia e sou Chef de Cozinha.")

// }

// imprimirFrase()

// b-


// let imprimirFrase = (nome, idade, cidade, profissao) => {
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)

// }

// imprimirFrase("João", 34, "Brasília", "Chef de Cozinha")

//2-
//a-

// const soma = (num1, num2) => {
//     const somados = num1 + num2
//     return somados
// }

// const somadosnumeros = soma(1,2)
// console.log(somadosnumeros)

//b-
// const comparar = (num1, num2) => {
//     const boleano = num1 >= num2
//     return boleano
// }
// const comparacaoBoleano = comparar(3, 10)
// console.log(comparacaoBoleano)

//c-
// const numeroPar = (num) => {
//     const ePar = ((num % 2) === 0)
//     return ePar
// }
// const confirmarPar = numeroPar(5)
// console.log(confirmarPar)

//d-
// const compararString = (mensagem) => {
//     const tamanhoString = mensagem
//     return tamanhoString
// }
// const resultadoFinal = compararString("Hoje foi um bom dia")
// console.log(resultadoFinal.length +","+ resultadoFinal.toUpperCase())


const num1 = Number(prompt("Favor inserir um número"))
const num2 = Number(prompt("Favor inserir outro número"))

const somar = (num1, num2) => {
    const somando = num1 + num2
    return somando
}

const subtrair = (num1, num2) => {
    const subtraindo = num1 - num2
    return subtraindo
}

const multiplicar = (num1, num2) => {
    const multiplicando = num1 * num2
    return multiplicando
}

const dividir = (num1, num2) => {
    const dividindo = num1 / num2
    return dividindo
}

const somandoFinal = somar(num1, num2)
const subtraindoFinal = subtrair(num1, num2)
const multiplicandoFinal = multiplicar(num1, num2)
const dividindoFinal = dividir(num1, num2)

console.log(`Números inseridos: ${num1} e ${num2}`)
console.log(`Números somados ${somandoFinal}`)
console.log(`Números subtraidos ${subtraindoFinal}`)
console.log(`Números multiplicados ${multiplicandoFinal}`)
console.log(`Números divididos ${dividindoFinal}`)
