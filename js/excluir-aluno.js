var tabela = document.querySelector("#tabela-alunos");

tabela.addEventListener("click", function (event){
    var elementoClicado = event.target;
    if(elementoClicado.classList.contains("btn-excluir")) {
        var celula = elementoClicado.parentNode;
        var linha = celula.parentNode;

        let celulaId = linha.querySelector(".td-id");
        let id = celulaId.textContent;
      
        if(confirm("Deseja realmente excluir o aluno(a)?")){
            removeAlunoDaAPI(id);
            linha.remove();
        }
    
    }
  

});

function removeAlunoDaAPI(idAluno){
    let xmlhttp =  new XMLHttpRequest();
    xmlhttp.open("DELETE", "http://localhost:8080/aluno/deletar?id= "+idAluno);
    xmlhttp.send();

}