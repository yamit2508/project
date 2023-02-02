let startButton=document.querySelector('#start');
let stopButton=document.querySelector('#stop');
let resetButton=document.querySelector('#reset');

let hrText=document.querySelector('#hr');
let minText=document.querySelector('#min');
let secText=document.querySelector('#sec');

let hr=0,min=0,sec=0;
let stopwatch;

function timer(){
    if(sec<10)
    secText.innerHTML="0"+sec;
    else 
    secText.innerHTML=sec;

    if(min<10)
    minText.innerHTML="0"+min;
    else
    minText.innerHTML=min;

    if(hr<10)
    hrText.innerHTML="0"+hr;
    else
    hrText.innerHTML=hr;

    sec++;
    if(sec==60){
    sec=0;   
    min++;
    }
    if(min==60){
    min=0;
    hr++;
    }
}
startButton.addEventListener('click',function(){
    timer();
    stopwatch=setInterval(timer,1000);
    startButton.disabled=true;
});

stopButton.addEventListener('click',function(){
    clearInterval(stopwatch);
    startButton.disabled=false;
});

resetButton.addEventListener('click',function(){
    hr=0;
    min=0;
    sec=0;
    hrText.innerHTML="00";
    minText.innerHTML="00";
    secText.innerHTML="00";
    clearInterval(stopwatch);
    startButton.disabled=false;
    });





