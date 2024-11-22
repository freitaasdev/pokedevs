const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev => {
  pokedev.addEventListener("click", () => {
    esconderCartaoPokedev();

    const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

    desativarPokedevNaListagem();
    ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
  })
})

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
  const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
  if (pokedevSelecionadoNaListagem) {
    pokedevSelecionadoNaListagem.classList.add("ativo");
  }
}

function desativarPokedevNaListagem() {
  const pokedevAtivoNaListagem = document.querySelector(".ativo");
  if (pokedevAtivoNaListagem) {
    pokedevAtivoNaListagem.classList.remove("ativo");
  }
}

function mostrarCartaoPokedevSelecionado(pokedev) {
  const idPokedevSelecionado = pokedev.id; // Simplificado
  const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
  const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
  if (cartaoPokedevParaAbrir) {
    cartaoPokedevParaAbrir.classList.add("aberto");
  }
  return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
  const cartaoPokedevAberto = document.querySelector(".aberto");
  if (cartaoPokedevAberto) {
    cartaoPokedevAberto.classList.remove("aberto");
  }
}
