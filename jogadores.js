const listaJogadores = document.querySelector(".lista-jogadores");
const jogadores = document.querySelectorAll(".bloco-jogador");

jogadores.forEach(function (jogador) {
  jogador.addEventListener("mouseenter", function () {
    const posicao = jogador.getBoundingClientRect();
    const larguraTela = window.innerWidth;

    listaJogadores.classList.add("com-hover");

    jogador.classList.remove("abrir-esquerda");
    jogador.classList.remove("abrir-baixo");

    if (larguraTela <= 700) {
      jogador.classList.add("abrir-baixo");
    } else if (posicao.right + 360 > larguraTela) {
      jogador.classList.add("abrir-esquerda");
    }
  });

  jogador.addEventListener("mouseleave", function () {
    listaJogadores.classList.remove("com-hover");

    jogador.classList.remove("abrir-esquerda");
    jogador.classList.remove("abrir-baixo");
  });
});