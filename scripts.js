var cnt=document.querySelector(".count");

let isstop=true;
var s=0;
var m=0;
var h=0;

function start(){

    if(isstop==true){
        isstop=false;
        timer();
    }
}

function timer(){
    if(isstop==false){

        s=parseInt(s);
        m=parseInt(m);
        h=parseInt(h);
        s++;
        if(s==60){
            s=0;
            m++;
        }
        if(m==60){
            m=0;
            h++;
        }
        // appending zero if value is less than 10//
        if(s<10){
            s="0"+s;
        }
        if(m<10){
            m="0"+m;
        }
        if(h<10){
            h="0"+h;
        }
        
        cnt.innerHTML=h+":"+m+":"+s;
        console.log(h+":"+m+":"+s);
        setTimeout("timer()",1000);
    }
}
function stop(){
    isstop=true;
}

function reset(){
    s=0;
    m=0;
    h=0;
// appending zero if value is less than 10//
//why again in here?//
//while it is already in start function//
//and it is not working in start function for reset btn//
    s=parseInt(s);
        m=parseInt(m);
        h=parseInt(h);

        if(s<10){
            s="0"+s;
        }
        if(m<10){
            m="0"+m;
        }
        if(h<10){
            h="0"+h;
        }
    cnt.innerHTML=h+":"+m+":"+s;
    console.log(h+":"+m+":"+s);
    isstop=true;
}
