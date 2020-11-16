let startbtn = document.querySelector("#StartStop");
let reset = document.querySelector("#reset");
let pause = document.querySelector("#pause");

let secondsCounter = document.querySelector("#seconds");
let minutesCounter = document.querySelector("#minutes");
let hoursCounter = document.querySelector("#hours");

let seconds = 0;
let minutes = 0;
let hours = 0;

let operation;

startbtn.addEventListener("click", function(){
    let counting = setInterval(startCount, 1000);

    reset.addEventListener("click", function(){
        startbtn.classList.remove("unactive");
        clearInterval(counting);
        seconds = 0;
        minutes = 0;
        hours = 0;
        secondsCounter.innerHTML = '00';
        minutesCounter.innerHTML = '00';
        hoursCounter.innerHTML =  '00';
    });

    pause.addEventListener("click", function(){
        startbtn.classList.remove("unactive");
        clearInterval(counting);
    })

    function startCount(){
        startbtn.classList.add("unactive");
        seconds++;

        if(seconds > 59){
            seconds = 0;
            minutes++;
        }  
        if(minutes > 59){
            minutes = 0;
            hours++;
        }

    
        secondsCounter.innerHTML = doubleDigit(seconds);
        minutesCounter.innerHTML = doubleDigit(minutes);
        hoursCounter.innerHTML =  doubleDigit(hours);
        

}})

function doubleDigit(time){
    if(time<10){
        return `0${time}`;
    }
    else{
        return time;
    }
}
