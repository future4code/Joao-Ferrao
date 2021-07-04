~~~
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
const notaFinal = (ex * 1) + (p1 * 2) + (p2 * 3)
const media = notaFinal / 6

    if(media >= 9){
      return "A"
    } else if(media < 9 && media >= 7.5){
      return "B"
    } else if (media < 7.5 && media > 6){
      return "C"
    } else if(media <= 6){
      return "D"
    } 
  
}
~~~