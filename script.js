var hour=document.getElementById("h");
var minute=document.getElementById("m");
var second=document.getElementById("s");
var milisecond=document.getElementById("ms");

let a=0,b=0,c=0,d=0;;

var start=document.getElementById("start");
var restart=document.getElementById("restart");

start.addEventListener("click",abcd);
restart.addEventListener("click",demo)


function abcd(){
    if(start.textContent=='Start'){
        start.innerHTML='Stop';
        fun1();
    }
    else if(start.textContent=='Stop'){
        start.innerHTML='Start';
        fun2();
    }

}

function demo(){
    if(restart.textContent=='Restart'){
        fun2();
        a=0,b=0,c=0,d=0;
        start.innerHTML='Start';
        hour.textContent='00';
        minute.textContent='00';
        second.textContent='00';
        milisecond.textContent='00';
    }
}
function fun2(){
    clearInterval(Timer);
}
function fun1(){
    Timer= setInterval(()=>{
        if(d=='99'){
            c++;
            d=0;
            second.textContent=`${c.toString().padStart(2,"0")}`;
        }
        if(c=='60'){
            b++;
            minute.textContent=`${b.toString().padStart(2,"0")}`;
            c=0;
            second.textContent=`${c.toString().padStart(2,"0")}`;
        }
        if(b=='60'){
            a++;
            minute.textContent=`${a.toString().padStart(2,"0")}`;
            b=0;
            hour.textContent=`${b.toString().padStart(2,"0")}`;
        }
        else {
            d++;
            milisecond.textContent=`${d.toString().padStart(2,"0")}`;
        }
    },10)
    
}
