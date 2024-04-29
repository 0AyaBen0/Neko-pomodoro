// variables

let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 24;
let breakTime = 4;

let seconds = "59";

let audio = new Audio("audio/Meow Sound Effect.mp3");
let play = document.getElementById('start');

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTitle.classList.add('active');

    audio.play().then(() => { // pause directly
        audio.pause();
        audio.currentTime = 0;
      });


}

// start timer
function start() {
    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // change the time
    seconds = 59;
    
    let workMinutes = workTime;
    let breakMinutes = breakTime;

    breakCount = 0;

    // countdown
    let timerFunction = () => {
        //change the display
        seconds = seconds - 1;
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // start
        

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1 ){
                if(breakCount % 2 === 0) {
                    // start break
                    workMinutes = breakMinutes;
                    seconds = 59;
                    breakCount++

                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                    
                }else {
                    // continue work
                    workMinutes = workTime;
                    seconds = 59;
                    breakCount++

                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                }
                audio.play();
            }
            seconds = 59;
        }
        
    }

    // start countdown
    setInterval(timerFunction, 1000);
}