var sec=00;
var min=00;
var hr=00;
var start= document.getElementById('start');
var pause= document.getElementById('pause');
var stop= document.getElementById('stop');
var tempo
start.addEventListener('click', function(){
    temp();
    tempoC=setInterval(temp,1000);
    start.removeEventListener('click',click)
            
})
pause.addEventListener('click',function(){
    clearInterval(tempoC);
    start.addEventListener('click',click)
})
stop.addEventListener('click',function(){
    clearInterval(tempoC);
    sec=0
    min=0
    hr=0
    document.getElementById('tempo').innerHTML="00:00:00"
})
function editNumero(num){
    if(num<10){
        return("0"+num);
    }else{
        return(num);
    }
}
function temp(){
    sec++;
    if(sec==60){
        sec=00;
        min++;
        if(min==60){
            min=00;
            hr++;
        }else{
            document.getElementById('tempo').innerHTML=editNumero(hr)+':'+editNumero(min)+':'+editNumero(sec);
        }
    }else{
        document.getElementById('tempo').innerHTML=editNumero(hr)+':'+editNumero(min)+':'+editNumero(sec);
    }
}