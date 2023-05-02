const minutosEl = document.querySelector("#minutes");
const segundosEl = document.querySelector("#seconds");
const millisegundosEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const continuaBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutos = 0;
let segundos = 0;
let millisegundos = 0;
let isPaused = false;


startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pausaTempo);
continuaBtn.addEventListener('click', continuaTempo);
resetBtn.addEventListener('click', resetaTempo);


function startTimer(){
    
    interval = setInterval(() =>{

        if(!isPaused){
            millisegundos += 10;
            
            if(millisegundos === 1000){
                segundos++;
                millisegundos = 0;
            }
            if(segundos === 60){
                minutos++;
                segundos = 0;
            }

            minutosEl.textContent = formataTempo(minutos);
            segundosEl.textContent = formataTempo(segundos);
            millisegundosEl.textContent = formataMilisegundos(millisegundos);
        }
    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
    
}

// para formatar o tempo:

function formataTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}

function formataMilisegundos(tempo){
    return tempo < 100 ? `${tempo}`.padStart(3, "0") : tempo;
}

//funcoes dos outros botoes de pausa, resume, resetar

function pausaTempo(){
    isPaused = true;
    pauseBtn.style.display = "none";
    continuaBtn.style.display = "block";
}

function continuaTempo(){
    isPaused = false;
    pauseBtn.style.display = "block"; 
    continuaBtn.style.display = "none"  
}

function resetaTempo(){
    clearInterval(interval);
    minutos = 0;
    segundos = 0;
    millisegundos = 0;
    isPaused = false;

    minutosEl.textContent = "00";
    segundosEl.textContent = "00";
    millisegundosEl.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    continuaBtn.style.display = "none";
}