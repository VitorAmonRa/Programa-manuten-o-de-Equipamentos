/* ==== Usado para padronizar o codigo ==== */
'use strict';

/* ==== Variaveis ===== */
let somaRtg = 0;
let somaSts = 0;
let somaEv = 0;
let somaRs = 0;

let btnAdicionar = document.getElementById('adicionar');
let btnRemover = document.getElementById('remover');
let btnPlanilha = document.getElementById('export');

/* ==== Eventos ==== */
btnAdicionar.addEventListener('click', adicionar,false);
btnRemover.addEventListener('click', remover,false);
btnPlanilha.addEventListener('click', exportar,false);

function adicionar(){
/* ==== Parte RTG ==== */
    if(document.getElementById('RTG').checked){
        somaRtg = somaRtg + 1;
        document.getElementById('vezesRTG').innerHTML = somaRtg;
/* ==== Parte STS ==== */
    }else if(document.getElementById('STS').checked){
        somaSts = somaSts + 1;
        document.getElementById('vezesSTS').innerHTML = somaSts;
 /* ==== Parte EV ==== */
    }else if(document.getElementById('EV').checked){
        somaEv = somaEv + 1;
        document.getElementById('vezesEV').innerHTML = somaEv;
/* ==== Parte RS ==== */
    }else if(document.getElementById('RS').checked){
        somaRs = somaRs + 1;
        document.getElementById('vezesRS').innerHTML = somaRs;
    }
}
function remover(){
/* ==== Parte RTG ==== */
    if(document.getElementById('RTG').checked){
        somaRtg = somaRtg -1;
         if(somaRtg < 0){
            somaRtg = 0;
        }
        document.getElementById('vezesRTG').innerHTML = somaRtg;
/* ==== Parte STS ==== */
    }else if(document.getElementById('STS').checked){
        somaSts = somaSts - 1;
         if(somaSts < 0){
            somaSts = 0;
        }
        document.getElementById('vezesSTS').innerHTML = somaSts;
/* ==== Parte EV ==== */
    }else if(document.getElementById('EV').checked){
        somaEv = somaEv - 1;
         if(somaEv < 0){
            somaEv = 0;
        }
        document.getElementById('vezesEV').innerHTML = somaEv;
/* ==== Parte RS ==== */
    }else if(document.getElementById('RS').checked){
        somaRs = somaRs - 1;
        if(somaRs < 0){
            somaRs = 0;
        }
        document.getElementById('vezesRS').innerHTML = somaRs;
    }
}