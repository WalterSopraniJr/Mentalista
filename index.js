function Chutar() {
    var resposta = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
  
    var numeroSecreto = parseInt(Math.random() * 11);
  
    if (chute == numeroSecreto) {
      resposta.innerHTML = "Você acertou!";
    } else if (chute > 10 || chute < 0) {
      resposta.innerHTML = "Você deve digitar um numero de 0 a 10";
    } else {
      resposta.innerHTML = "Você errou, o número era: " + numeroSecreto;
    }
  }
  