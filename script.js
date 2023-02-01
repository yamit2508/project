let startbutton=document.querySelector('#start');
let stopbutton=document.querySelector('#stop');
let resetbutton=document.querySelector('#reset');

let hrtext=document.querySelector('#hr');
let mintext=document.querySelector('#min');
let sectext=document.querySelector('#sec');

let hr=0,min=0,sec=0;
let stopwatch;

function timer(){
    if(sec<10)
    sectext.innerHTML="0"+sec;
    else 
    sectext.innerHTML=sec;

    if(min<10)
    mintext.innerHTML="0"+min;
    else
    mintext.innerHTML=min;

    if(hr<10)
    hrtext.innerHTML="0"+hr;
    else
    hrtext.innerHTML=hr;

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
startbutton.addEventListener('click',function(){
    timer();
    stopwatch=setInterval(timer,1000);
    startbutton.disabled=true;
});

stopbutton.addEventListener('click',function(){
    clearInterval(stopwatch);
    startbutton.disabled=false;
});

resetbutton.addEventListener('click',function(){
    hr=0;
    min=0;
    sec=0;
    hrtext.innerHTML="00";
    mintext.innerHTML="00";
    sectext.innerHTML="00";
    clearInterval(stopwatch);
    startbutton.disabled=false;
    });





