let btnConsultar = document.querySelector("#btnConsultarAluno");

btnConsultar.addEventListener("click", function(){
         consultaAlunosDaAPI()

    });

    function consultaAlunosDaAPI(){
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "http://localhost:8080/aluno/listar");
        xmlhttp.send();
        xmlhttp.addEventListener("load", function(){
            limparTabela();
            let listaDeAlunos = JSON.parse(xmlhttp.responseText);
            listaDeAlunos.forEach(aluno => {
                adicionaAlunoNaTabela(aluno);
             });

            });

    }

    function limparTabela(){
        let tabela = document.querySelector("#tabela-alunos").querySelector("tbody");
        tabela.innerHTML = "";
    }

function adicionaAlunoNaTabela(aluno) {
    var tabelaAlunos = document.querySelector("#tabela-alunos").querySelector("tbody");
    let linha = criaLinhaAluno(aluno);

    tabelaAlunos.appendChild(linha);

}