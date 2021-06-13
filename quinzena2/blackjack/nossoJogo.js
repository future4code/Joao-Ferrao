/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log(`Bem vindo ao jogo de Blackjack!`)
returnRodada()
function rodadaBlackjack() {

   if (confirm("Deseja iniciar um novo jogo?")) {
      console.log("Distribuindo as cartas...")

      const carta1Usuario = comprarCarta()
      const carta2Usuario = comprarCarta()
      const carta3Usuario = comprarCarta()

      const carta1Computador = comprarCarta()
      const carta2Computador = comprarCarta()


      let resultadoUsuario = (carta1Usuario.valor) + (carta2Usuario.valor)
      let resultadoComputador = (carta1Computador.valor) + (carta2Computador.valor)

      console.log("Usuario - Cartas:", carta1Usuario.texto, carta2Usuario.texto, "- Pontuação ", resultadoUsuario)
      console.log("Computador - Cartas:", carta1Computador.texto, carta2Computador.texto, "- Pontuação", resultadoComputador)



      if (resultadoUsuario < 21 && confirm("Aceita comprar mais uma carta?")) {
         resultadoUsuario = resultadoUsuario + carta3Usuario.valor
         console.log("Cartas do Usuario", carta1Usuario.texto, carta2Usuario.texto, carta3Usuario.texto, "Valor igual a:", resultadoUsuario)

      }

      if (resultadoUsuario === 21) {
         console.log("BLACKJACK!!! Você GANHOU!!!!")
      } else if (resultadoUsuario > 21) {
         console.log("Usuário extrapolou a pontuação, Computador ganhou!")
      } else if (resultadoComputador > 21) {
         console.log("computador extrapolou a pontuação, Usuário ganhou!")
      } else if (resultadoUsuario > resultadoComputador) {
         console.log("O usuário ganhou!")
      } else if (resultadoUsuario < resultadoComputador) {
         console.log("O computador ganhou!")
      } else if (resultadoUsuario === resultadoComputador) {
         console.log("EMPATE")
      }
      return true

   } else {
      console.log("A rodada Acabou!")
      return false
   }
}

function returnRodada () {
   let usuarioQuerJogar = true
   while (usuarioQuerJogar) {
      usuarioQuerJogar = rodadaBlackjack()
   }
   console.log("O Jogo acabou!")
}

