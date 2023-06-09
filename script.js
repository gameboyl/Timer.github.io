let set = document.getElementById('set');
let run = document.getElementById('run');
let pause = document.getElementById('stop');
let reset = document.getElementById('reset');
let set_speed = document.getElementById('speedBTN')
let body = document.querySelector('body')
let submitter = document.querySelector('.submitter')
let speed_num = document.getElementById('inputspeed')
let down = document.querySelector(".down")
let up = document.querySelector(".up")
let StopWatch = document.getElementById("StopWatch")

let counterElem = document.getElementById('counter');
let popCont = document.getElementById('popupCont');
let submit = document.getElementById('submit');
let amountElem = document.getElementById('amount');
let speedCount = document.getElementById("speedCount")

let counter = 0;
let amount = 0;
let interval;
let speed_num_int = 1000;
let StopInterval;

function onSubmitClick() {
    amount = amountElem.value;
    popCont.style.display = 'none';

}

function setCounter() {
    popCont.style.display = '';

    speedCount.style.display = 'none';
}

function startCounter() {
    interval = setInterval(function () {
        if(counter >= amount) {
            clearInterval(interval);
            interval = null;
            return;
        }
        speed_num_int = speed_num.value
        counter++;
        counterElem.innerHTML = counter;
    }, speed_num_int);
}

function pauseCounter() {
    clearInterval(interval);
    clearInterval(StopInterval)
}

function resetCounter() {
  clearInterval(interval);
  clearInterval(StopInterval);
  counter = 0;
  counterElem.innerHTML = counter;
  StopInterval = null;
}


function setSpeed() {
    speedCount.style.display = "block";
    clearInterval(interval);

    // body.style.filter = "blur(1px)"
    
    body.addEventListener('click', function(event) {
      if (event.target === body) {
        speedCount.style.display = "none";
        set.style.position = ""; 
        run.style.position = "";
        pause.style.position = "";
        reset.style.position = "";
        set_speed.style.position = "";

        set.classList.remove("down")
        pause.classList.remove("down")
        run.classList.remove("down")
        reset.classList.remove("down")
        set_speed.classList.remove("down")
        StopWatch.classList.remove("down")
      }
      else {
        return;
      }
    });
    set.classList.add("down")
    pause.classList.add("down")
    run.classList.add("down")
      reset.classList.add("down")
    set_speed.classList.add("down")
    StopWatch.classList.add("down")
    }
function Submitting() {
    speedCount.style.display = "none";
    speed_num_int = parseInt(speed_num.value)
    // console.log(speed_num_int)

    if(isNaN(speed_num_int)) {
         speed_num_int = 1000;
    }


    speed_num.value = speed_num_int

    set.style.position = ""; 
    run.style.position = "";
    pause.style.position = "";
    reset.style.position = "";
    set_speed.style.position = "";
    StopWatch.style.position = "";

    body.addEventListener('click', function(event) {
        if (event.target === body) {
          speedCount.style.display = "none";
          set.style.position = ""; 
          run.style.position = "";
          pause.style.position = "";
          reset.style.position = "";
          set_speed.style.position = "";
          StopWatch.style.position = "";
  
          set.classList.remove("down")
          pause.classList.remove("down")
          run.classList.remove("down")
          reset.classList.remove("down")
          set_speed.classList.remove("down")
          StopWatch.classList.remove("down")
        }
        else {
          return;
        }
    })

    // set.style.position = "relative"
    // set.style.top = "100px"
    
    // run.style.position = 'relative'
    // run.style.top = '100px'

    // pause.style.position = 'relative'
    // pause.style.top = '100px'

    // reset.style.position = 'relative'
    // reset.style.top = '100px'

    // set_speed.style.position = 'relative'
    // set_speed.style.top = '100px'

    set.classList.toggle("down")
    pause.classList.toggle("down")
    run.classList.toggle("down")
    reset.classList.toggle("down")
    set_speed.classList.toggle("down")
    StopWatch.classList.toggle("down")
}

function StopperWatcher() {
  clearInterval(interval)
  if (StopInterval) {
    return;
  }
  else {
    StopInterval = setInterval(() => {
      speed_num_int = speed_num.value
      counter++;
      counterElem.innerHTML = counter;
      speed_num_int = parseInt(speed_num)
      // console.log(speed_num_int)

      if(isNaN(speed_num_int)) {
        speed_num_int = 1000;
      }
    }, speed_num_int);
  }
}

submit.addEventListener('click', onSubmitClick)
set.addEventListener('click', setCounter);
run.addEventListener('click', startCounter);
pause.addEventListener('click', pauseCounter);
reset.addEventListener('click', resetCounter);
set_speed.addEventListener('click', setSpeed)
submitter.addEventListener('click', Submitting);
StopWatch.addEventListener('click', StopperWatcher)