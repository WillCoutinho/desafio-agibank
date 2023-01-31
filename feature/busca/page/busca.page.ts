export default class BuscaPage {
  constructor() {}

  get buscarPage() {
    return {
      iconeBusca: "#search-open",
      campoBusca: ".desktop-search input.search-field",
      botaoPesquisar: '[type="submit"]',
      tituloErro: ".entry-title",
      subtituloErro: ".entry-content p",
      txtTituloErro: "Nenhum resultado",
      txtSubtituloErro:
        "Não encontramos nada para estes termos de busca. Tente novamente com palavras-chave diferentes.",
      listaArtigos: '[role="main"] article',
      tituloSucesso: ".archive-title",
    }
  }
}
