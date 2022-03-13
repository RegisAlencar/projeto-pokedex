const listaSelecaoPokemons = document.querySelectorAll(".pokemon")
const pokemonsCard = document.querySelectorAll(".cartao-pokemon")

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener("click", () => {
        const cartaoPokemonAberto = document.querySelector(".aberto")
        cartaoPokemonAberto.classList.remove("aberto")
         
        const idPokemnSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemnSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add("aberto")

        const pokemonAtivoNaListagem = document.querySelector(".ativo")
        pokemonAtivoNaListagem.classList.remove("ativo")

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemnSelecionado)
        pokemonSelecionadoNaListagem.classList.add("ativo")
    })
})