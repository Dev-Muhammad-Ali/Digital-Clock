let Hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let Seconds = document.querySelector("#seconds");
let zone = document.querySelector("#zone");

function TIME(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds(); 
    alert(h);
    if(h>=12){
        zone.innerHTML = "PM"
    }
    else{
        zone.innerHTML = "AM"
    }

    if(h>12){
        h = h - 12;
        if(h<10){
            Hours.innerHTML = "0" + h;
        }
        else{
            Hours.innerHTML = h;
        }
        
    }
    else{
        if(h<10){
            Hours.innerHTML = "0" + h;
        }
        else{
            Hours.innerHTML = h;
        }
    }
    
    if(m<10){
        m = "0" + m;
        minutes.innerHTML = m;
    }
    else{
        minutes.innerHTML = m;
    }
    
    if(s<10){
        s = "0" + s;
        Seconds.innerHTML = s;
    }
    else{
        Seconds.innerHTML = s;
    }
}

function startClock(){
    TIME();
    setInterval(TIME,1000);
}
startClock();
