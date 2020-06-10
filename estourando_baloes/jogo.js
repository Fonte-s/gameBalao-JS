var timeId=null;


function iniciaJogo(){
    var tempo_segundos=0;
  
    var url= window.location.search;
    var nivel_jogo=url.replace("?", "");

    if(nivel_jogo==1){
        tempo_segundos==120;

    }
    if(nivel_jogo==2){
        tempo_segundos==60;
    }
    if(nivel_jogo==3){
        tempo_segundos==30;
    }
    
 
    document.getElementById('tempo').innerHTML=tempo_segundos;

    var quantida_baloes=20;

    cria_baloes(quantida_baloes);
document.getElementById('baloes_inteiros').innerHTML=quantida_baloes;
document.getElementById('baloes_estourado').innerHTML=0;
contagem_tempo(30);

}


function contagem_tempo(tempo_segundos){

    tempo_segundos=tempo_segundos-1;

    if(tempo_segundos==-1){
        clearTimeout(timeId);
        game_over();
        return false;
    }

    document.getElementById('tempo').innerHTML=tempo_segundos;

timeId = setTimeout("contagem_tempo("+tempo_segundos+")",1000);

}
function game_over(){
    alert(' Você não conseguiu estourar todos os balões a tempo');
}


function cria_baloes(quantida_baloes){

    for(var cont=1; cont<=quantida_baloes; cont++){

        var balao=document.createElement("img");
        balao.src='imagens/balao_azul_pequeno.png';
        balao.style.margin='10px';
        balao.id='b'+cont;
        balao.onclick=function(){ estourar(this);};

        document.getElementById('cenario').appendChild(balao)

    }

}
function estourar(e){
    var id_balao=e.id;
    document.getElementById(id_balao).src='imagens/balao_azul_pequeno_estourado.png';
    
    pontuacao(-1);

}

function pontuacao(acao){
var baloes_inteiros=document.getElementById('baloes_inteiros').innerHTML;
var baloes_estourado=document.getElementById('baloes_estourado').innerHTML;
baloes_inteiros=parseInt(baloes_inteiros);
baloes_estourado=parseInt(baloes_estourado);
baloes_inteiros=baloes_inteiros+acao;
baloes_estourado=baloes_estourado-acao;


document.getElementById('baloes_inteiros').innerHTML=baloes_inteiros;
document.getElementById('baloes_estourado').innerHTML=baloes_estourado;

situacao_jogo(baloes_inteiros, baloes_estourado);

}
function situacao_jogo(baloes_inteiros, baloes_estourado){
    if(baloes_inteiros==0){
        alert('Parabéns, você conseguiu estourar todos os baloes a tempo');
        parar_jogo();
    }

}

function parar_jogo(){
    clearTimeout(timeId);
}