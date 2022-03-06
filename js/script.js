const hour             = document.querySelector('.h'),
      min              = document.querySelector('.m'),
      sec              = document.querySelector('.s'),
      hoursNum         = document.querySelector('.hours'),
      minutesNum       = document.querySelector('.minutes'),
      secondsNum       = document.querySelector('.seconds-number'),
      links = document.querySelectorAll('.tabsItem'),
      tabs = document.querySelectorAll('.tabsContentItem'),
      miliSecondsNum            = document.querySelector('.mili-seconds-number'),
      //timer variables
      btnStartStopWatch         = document.querySelector('.stopwatch__btn'),
      hourStopWatch             = document.querySelector('.stopwatch__hours'),
      minStopWatch              = document.querySelector('.stopwatch__minutes'),
      secStopWatch              = document.querySelector('.stopwatch__seconds'),
      btnStop                   = document.querySelector('.stopwatch__btn-stop'),
      btnClear                   = document.querySelector('.stopwatch__btn-clear');

      let housrTimer    = 0,
          minutesTimer  = 0,
          secondsTimer  = 0,
          interval      = 0;


      

      function clock() {
          let time       = new Date(),
              seconds    = time.getSeconds() * 6, // 0 -> 360
              minutes    = time.getMinutes() * 6, // 0 -> 360
              hours      = time.getHours() * 30; //
              
              sec.style  = `transform: rotate(${seconds}deg)`;
              min.style  = `transform: rotate(${minutes}deg)`;   
              hour.style = `transform: rotate(${hours}deg)`;
              
            hoursNum.innerHTML   = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
            minutesNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
            secondsNum.innerHTML = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();


            if (time.getMilliseconds() < 10) {
                miliSecondsNum.innerHTML = '00' + time.getMilliseconds();
            }else if(time.getMilliseconds() < 100){
                miliSecondsNum.innerHTML = '0' + time.getMilliseconds();
            }else if(time.getMilliseconds() > 100){
                miliSecondsNum.innerHTML = time.getMilliseconds();
            }


          setTimeout(() => clock(), Infinity);
      }
      clock();
         

      
                for (let i = 0; i < links.length; i++) {
                    links[i].addEventListener('click', function (e) {
                       e.preventDefault()
                       for (let x = 0; x < links.length; x++) {
                           links[x].classList.remove('active');
                           tabs[x].classList.remove('active');
                       }
                       tab(this, tabs[i])
                    })
                    
                }
                function tab(el, arr){
                    el.classList.add('active');
                    arr.classList.add('active');
                }






                //TIMER
                btnStartStopWatch.addEventListener('click', function () {
                    clearInterval(interval);
                    interval = setInterval(startStopWatch, 950);
                })
                function startStopWatch() {
                    secondsTimer++;
                    secStopWatch.innerHTML  = secondsTimer;
                    if (secondsTimer > 59) {
                        minStopWatch.innerHTML  = minutesTimer;
                        minutesTimer++;
                        seconds = 0;
                    }
                    if (minutesTimer > 59) {
                        hourStopWatch.innerHTML = housrTimer;
                        housrTimer++;
                        minutesTimer = 0;
                    }
                }
                btnStop.addEventListener('click', function () {
                    clearInterval(interval);
                })
                btnClear.addEventListener('click', () =>{
                    clearInterval(interval);
                    housrTimer = 0;
                    minutesTimer = 0;
                    secondsTimer = 0;
                    hourStopWatch.innerHTML = housrTimer;
                    minStopWatch.innerHTML = minutesTimer;
                    secStopWatch.innerHTML = secondsTimer;
                })                
            









