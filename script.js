/* Usado para padronizar o codigo */
'use strict';

/* Variaveis */
let somaRtg = 0;
let somaSts = 0;
let somaEv = 0;
let somaRs = 0;

let btnAdicionar = document.getElementById('adicionar');
let btnRemover = document.getElementById('remover');
let btnPlanilha = document.getElementById('export');

/* eventos */
btnAdicionar.addEventListener('click', adicionar,false);
btnRemover.addEventListener('click', remover,false);
btnPlanilha.addEventListener('click', exportar,false);

function adicionar(e){
    if(document.getElementById('RTG').checked){
        somaRtg = somaRtg + 1;
        document.getElementById('vezesRTG').innerHTML = somaRtg;
    }else if(document.getElementById('STS').checked){
        somaSts = somaSts + 1;
        document.getElementById('vezesSTS').innerHTML = somaSts;
    }else if(document.getElementById('EV').checked){
        somaEv = somaEv + 1;
        document.getElementById('vezesEV').innerHTML = somaEv;
    }else if(document.getElementById('RS').checked){
        somaRs = somaRs + 1;
        document.getElementById('vezesRS').innerHTML = somaRs;
    }
}
function remover(e){
    if(document.getElementById('RTG').checked){
        somaRtg = somaRtg -1;
         /* Argumento para fazer o valor nao ficar negativo */
         if(somaRtg < 0){
            somaRtg = 0;
        }
        document.getElementById('vezesRTG').innerHTML = somaRtg;
    }else if(document.getElementById('STS').checked){
        somaSts = somaSts - 1;
         /* Argumento para fazer o valor nao ficar negativo */
         if(somaSts < 0){
            somaSts = 0;
        }
        document.getElementById('vezesSTS').innerHTML = somaSts;
    }else if(document.getElementById('EV').checked){
        somaEv = somaEv - 1;
         /* Argumento para fazer o valor nao ficar negativo */
         if(somaEv < 0){
            somaEv = 0;
        }
        document.getElementById('vezesEV').innerHTML = somaEv;
    }else if(document.getElementById('RS').checked){
        somaRs = somaRs - 1;
        /* Argumento para fazer o valor nao ficar negativo */
        if(somaRs < 0){
            somaRs = 0;
        }
        document.getElementById('vezesRS').innerHTML = somaRs;
    }
}