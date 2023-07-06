

var titulo = document.querySelector('.titulo-pagina');
titulo.textContent = 'Sistema - Nota de Alunos';

//Função simples que exibe apenas uma mensagem
function mostrarMensagem(){
    alert("O elemento foi clicado.");
}

function mostrarSegundaMensagem(){
    alert("Chamou a segunda função.");
    titulo.removeEventListener("click", mostrarSegundaMensagem);
}

//Chamando a função ao clicar no titulo
//titulo.onclick = mostrarMensagem;
//Chamando a função ao passar o mouse no titulo
//titulo.onmouseover = mostrarMensagem;
//titulo.ondblclick = mostrarMensagem;

//titulo.addEventListener("click", mostrarMensagem);
//titulo.addEventListener("click", mostrarSegundaMensagem);

var alunos = document.querySelectorAll('.aluno');

for(var i = 0; i < alunos.length; i++){
    var trAluno = alunos[i];

    var tdNome = trAluno.querySelector('.td-nome');
    var nome = tdNome.textContent;

    var tdTrabalho = trAluno.querySelector('.td-trabalho');
    var trabalho = Number(tdTrabalho.textContent);

    var tdProva = trAluno.querySelector('.td-prova');
    var prova = Number(tdProva.textContent);

    var tdMedia = trAluno.querySelector('.td-media');

    var notaTrabalhoValida =  validarNotaTrabalho(trabalho);
    var notaProvaValida = validarNotaProva(prova);

    

    if(prova < 0 || prova > 10){
        console.log("Nota da prova, Inválida!");
        notaProvaValida = false;
    }

    if(notaTrabalhoValida && notaProvaValida){
       var mediaAluno = calcularMedia(trabalho, prova);
        tdMedia.textContent = mediaAluno;
         
        if(mediaAluno < 7){
            trAluno.classList.add("aluno-reprovado");
          
        }

    }else{
        tdMedia.textContent = "Notas Inválidas, verifique!!";
    }

   }

   function calcularMedia(notaTrabalho, notaProva){
       var mediaAluno = (parseFloat(notaTrabalho) + parseFloat(notaProva)) / 2;
        return mediaAluno.toFixed(2);

   }

   function validarNotaTrabalho(notaTrabalho){
    if(notaTrabalho < 0 || notaTrabalho > 10){
        console.log("Nota do trabalho, Inválida!");
        return false;
    }else{
        return true;
    }

   }

   function validarNotaProva(notaProva){
    if(notaProva < 0 || notaProva > 10){
        console.log("Nota da prova, Inválida!");
        return false;
    }else{
        return true;
    }

    
   }





