// console.log("Hello World!")

// Exercícios de Interpretação de Código

// 1-
// Matheus Nachtergaele
// 3
// canal: "Globo", horario: "14h"

// 2-
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"


//     const gato = {
//         nome: "Juba", 
//         idade: 3, 
//         raca: "SRD"

//         const tartaruga = {
//             nome: "Jubo", 
//             idade: 3, 
//             raca: "SRD"

// 3-
// false
// undefined

// o valor é undefined porque não foi especidficada a variavel "altura"


// Exercícios de escrita de código

// 1-
// const pessoa = {
//     nome: "Germano",
//     apelidos: ["Gê", "Mano", "Gegê"],

// }

// function imprimir(pessoa) {
//     return console.log(`Eu me chamo ${pessoa.nome} mas pode me chamar de ${pessoa.apelidos}`)
// }

// console.log(imprimir(pessoa))

// const novaPessoa ={
//     ...pessoa,
//     apelidos:["cabeção", "barriga", "sujeira"],
// }



// console.log(imprimir(novaPessoa))


// // 2-

// const pessoa1 = {
//     nome: "Joao",
//     idade: "34",
//     profissao: "Futuro DEV",
// }

// const pessoa2 = {
//     nome: "Elenara",
//     idade: "54",
//     profissao: "Analista do Judiciario"
// }

// function respostaArray(pessoa1) {
//     return [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]

// }
// console.log(respostaArray(pessoa1))
// console.log(respostaArray(pessoa2))

// 3-
// a-


// const carrinho = []



// const fruta1 = {
//     nome: "Abacaxi",
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "Pêssego",
//     disponibilidade: true
// }

// const fruta3 = {
//     nome: "Carambola",
//     disponibilidade: true
// }

// const addFrutaNoCarrinho = (fruta) => {
//     carrinho.push(fruta)
// }

// addFrutaNoCarrinho(fruta1)
// addFrutaNoCarrinho(fruta2)
// addFrutaNoCarrinho(fruta3)

// console.log(carrinho)


// DESAFIO

//1-
// const nome = (prompt("Qual seu nome?"))
// const idade = Number(prompt("Qual sua idade?"))
// const profissao = (prompt("Qual sua profissão?"))

// const objeto = {
//     nomeDoUsuario: nome,
//     idadeDoUsuario: idade,
//     profissaoDoUsuario: profissao,

// }

// console.log(objeto)
// console.log(typeof objeto)

//2- 

// const filme1 = {
//     anoDeLancamento: 2020,
//     nome: "A volta dos que não foram",
// }

// const filme2 = {
//     anoDeLancamento: 2020,
//     nome: "Querida Encolhi as Crianças",

// }

// function compararAntes(inputFilme1, inputFilme2) {
//     const filme1EAntes = inputFilme1.anoDeLancamento < inputFilme2.anoDeLancamento
//     const filme1EIgual = inputFilme1.anoDeLancamento === inputFilme2.anoDeLancamento
//     return `O primeiro filme foi lançado antes do segundo? ${filme1EAntes}
//     O primeiro filme foi lançado no mesmo ano do segundo? ${filme1EIgual}`    
//     }

// console.log(compararAntes(filme1, filme2))
