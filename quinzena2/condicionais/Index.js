//console.log("Hellor World")

//Exercicios de interpretação de código

//1
//a- O código recebe um numero do usuário, diz que a variável é um numero. 
// e verifica de ele é divisivel por 2 e se o resto é 0

//b- Números pares
//c- Numeros impares

//2
//a- Para definir os preços das frutas
//b- R$2,25
//c- O preço da fruta  Pêra  é  R$  5

//3
//a- Pede ao usuario um numero
//b- 10 - "Esse número passou no teste", "Essa mensagem é secreta!!!" // -10 não tem mensagem alguma
//c- o erro é que a variável "mensagem" está dentro do if e já que o -10 não corresponde a condição ela não pode ser lida pelo console.


//Exercícios de escrita de código

//1

// const idadeUsuario = Number(prompt("Qual a sua idade?"))
// if (idadeUsuario >= 18){
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir.")
// }

//2
// const periodoDeEstudo = (prompt("Qual o período em que você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno)"))
// if (periodoDeEstudo === "M") {
//     console.log("Bom Dia!!")
// } else if (periodoDeEstudo === "V") {
//     console.log("Boa Tarde!!")
// } else if (periodoDeEstudo === "N") {
//     console.log("Boa Noite!!")
// } else {
//     console.log("Favor digitar conforme solicitado, M (matutino), V (Vespertino) ou N (Noturno)")
// }

//3-
// const periodoDeEstudo = (prompt("Qual o período em que você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno)"))
// switch (periodoDeEstudo) {
//     case "M":
//         console.log("Bom Dia!!") 
//         break
//     case "V":
//         console.log("Boa Tarde!!") 
//         break
//     case "N":
//         console.log("Boa Noite!!") 
//         break
//     default:
//         console.log("Favor digitar conforme solicitado, M (matutino), V (Vespertino) ou N (Noturno)")
//}

// 4-
// const tipoDeFilme = (prompt("Qual tipo de filme vamos assistir? (Terror, Ação ou Fantasia"))
// const precoIngresso = Number(prompt("Qual o valor do ingresso??"))

// if (tipoDeFilme === "Fantasia" && precoIngresso <= 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }


// DESAFIO 1-

// const tipoDeFilme = (prompt("Qual tipo de filme vamos assistir? (Terror, Ação ou Fantasia"))
// const precoIngresso = Number(prompt("Qual o valor do ingresso??"))
// const snack = (prompt("Qual vai ser o lanche que iremos comer no cinema?"))

// if (tipoDeFilme === "Fantasia" && precoIngresso <= 15) {
//     console.log(`Bom filme! Aproveite o seu ${snack}`)
// } else {
//     console.log("Escolha outro filme :(")
// }

//DESAFIO 2-

const nome = (prompt("Qual seu nome completo?"))
const tipoDeJogo = (prompt("Qual o tipo de jogo? IN indica internacional; e DO indica doméstico;"))
const etapaDoJogo = (prompt("Qual a etapa do jogo? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final"))
const categoria = Number(prompt(" Qual a categoria do ingresso? opções 1, 2, 3 ou 4; "))
const quantIngressos = Number(prompt("Qual a quantidade de ingressos?"))



// const jogoDoUsuario = {
//     SF:[1320, 880, 550, 220],
//     DT:[660, 440, 330, 170],
//     FI:[1980, 1320, 880, 330],
// }

// if (jogoDoUsuario.[tipoDeJogo][categoria -1]){
//     console.log()
// }


function funcaoTipoDeJogo(inputTipoDeJogo) {
    if (tipoDeJogo === "DO"){
        return "Nacional"
    } else if(tipoDeJogo === "IN"){
        return "Internacional"
    }

}
function multiplicadorLocalidade(inputMultiplicador) {
    if (tipoDeJogo === "DO"){
        return 1
    } else if(tipoDeJogo === "IN"){
        return (4,10)
    }
}

function funcaoEtapaDoJogo(InputEtapaDeJogo) {
    if (etapaDoJogo === "SF"){
        return "SemiFinais"
    } else if (etapaDoJogo === "DT") {
        return "Decisão do 3º Lugar"
    } else if (etapaDoJogo === "FI") {
        return "Final"
    }
}
function valorDoIngresso (InputValorDoIngresso, InputCategoria) {
    if (etapaDoJogo === "SF"){
        if (categoria === 1){
            return 1320
        } else if (categoria === 2){
            return 880
        } else if (categoria === 3){
            return 550
        } else if (categoria === 4){
            return 220
        }
    }
    if (etapaDoJogo === "DT"){
        if (categoria === 1){
            return 660
        } else if (categoria === 2){
            return 440
        } else if (categoria === 3){
            return 330
        } else if (categoria === 4){
            return 170
        }
    }
    if (etapaDoJogo === "FI"){
        if (categoria === 1){
            return 1980
        } else if (categoria === 2){
            return 1320
        } else if (categoria === 3){
            return 880
        } else if (categoria === 4){
            return 330
        }
    }
    
}

console.log(`
    ---Dados da compra---
Nome do cliente: ${nome}
Tipo do jogo: ${funcaoTipoDeJogo(tipoDeJogo)}
Etapa do Jogo: ${funcaoEtapaDoJogo(etapaDoJogo)}
Categoria: ${categoria}
Quantidade de Ingressos:${quantIngressos}
    -- Valores--
Valor do ingresso= R$${valorDoIngresso(tipoDeJogo) * multiplicadorLocalidade(tipoDeJogo)}
Valor Total:R$${valorDoIngresso(tipoDeJogo) * quantIngressos * multiplicadorLocalidade(tipoDeJogo)}`)
    
