// Recuperar as vagas salvas no localStorage ao carregar a página
window.onload = function () {
    carregarComicsSalvos();
};

function cadastrarcomics() {
    var nome = document.getElementById("nome").value;
    var descricao = document.getElementById("descricao").value;

    if (nome && descricao) {
        // Cria um objeto representando o comics
        var novoComics = {
            nome: nome,
            descricao: descricao,
        };

        // Salva a vaga no localStorage
        salvarComics(novoComics);

        // Adiciona a vaga à lista na interface
        adicionarComicsNaLista(novoComics);

        // Limpa o formulário após o cadastro
        document.getElementById("nome").value = "";
        document.getElementById("descricao").value = "";
    } else {
        alert("Preencha todos os campos do formulário.");
    }
}

function adicionarComicsNaLista(comics) {
    var listaComics = document.getElementById("comicsdisponíveis");
    var novoComics = document.createElement("li");
    novoComics.innerHTML = `<strong>${comics.nome}</strong>: ${comics.descricao}`;
    listaComics.appendChild(novoComics);
}

function salvarComics(comics) {
    // Recupera as vagas salvas no localStorage
    var comicsSalvos = JSON.parse(localStorage.getItem("comics")) || [];

    // Adiciona a nova vaga à lista de vagas
    comicsSalvos.push(comics);

    // Salva a lista atualizada no localStorage
    localStorage.setItem("comics", JSON.stringify(comicsSalvos));
}

function carregarComicsSalvos() {
    // Recupera as vagas salvas no localStorage
    var comicsSalvos = JSON.parse(localStorage.getItem("comics")) || [];

    // Adiciona as vagas à lista na interface
    comicsSalvos.forEach(adicionarComicsNaLista(comics));
}
