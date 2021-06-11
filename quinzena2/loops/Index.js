//console.log("Hello World")


//Exercicios de interpretação de codigo

//1- 10

//2- 19, 21, 23, 25, 27, 30

// for of não seria suficiente, teria que usar somente o For

//3- 
// *
// **
// ***
// ****


//Exercicios de escrita de codigo

//1- 

// let numeroPets = Number(prompt("Quantos pets você possui?"))
// let perguntaPets = ""
// let nomeDosPets = []

// if (numeroPets === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// }
// for (let i = 0; i < numeroPets; i++) {
    
//     perguntaPets = (prompt("Qual o nome do seu pet"))
//     nomeDosPets.push(perguntaPets)

// }

// console.log(nomeDosPets)

//2-

// let arrayOriginal = [1,2,3,4,5,6,7]
// function imprimir (inputArrayNumeros) {
//     for (let i = 0; i< inputArrayNumeros.length; i++) {
//         console.log(inputArrayNumeros[i])
//     }
// }
// imprimir(arrayOriginal)

//b-

// let arrayOriginal = [1,2,3,4,5,6,7]
// function imprimir (inputArrayNumeros) {
//     for (let i = 0; i < inputArrayNumeros.length; i++) {
//         console.log(inputArrayNumeros[i] / 10)
//     }
// }
// imprimir(arrayOriginal)

//c-

// let arrayOriginal = [1,2,3,4,5,6,7]
// function imprimir (inputArrayNumeros) {
//     for (let i = 0; i < inputArrayNumeros.length; i ++) {
//         if (inputArrayNumeros[i] % 2 === 0) {
//             console.log(inputArrayNumeros[i])
//         }
//     }
// }
// imprimir(arrayOriginal)


//D-

// let arrayOriginal = [1,2,3,4,5,6,7]
// function imprimir (inputArrayNumeros) {
//     for (let i = 0; i < inputArrayNumeros.length; i++) {
//         console.log(`O elemento do index é ${i} número${inputArrayNumeros[i]}`)
//     }
// }
// imprimir(arrayOriginal)


//E

let arrayNumeros = [17, 128, 684, 987, 13465, 6, 170986,]

function pegaMaior(inputArrayNumeros) {
    let maiorNumero = 0
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] > maiorNumero) {
            maiorNumero = arrayNumeros[i]
        }
    }
    return maiorNumero
}

function pegaMenor(inputArrayNumeros) {
    let menorNumero = 0
    menorNumero = arrayNumeros
    for (let i = 0; i < arrayNumeros.length; i++){
        if (arrayNumeros[i] < menorNumero) {
            menorNumero = arrayNumeros[i]
        }
    }
    return menorNumero
}
console.log(`O maior número é ${pegaMaior(arrayNumeros)} e o menor é ${pegaMenor(arrayNumeros)}`)



