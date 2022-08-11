function inserir(num){
    var numero=document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML= numero+num;
   
}
function apagar(){
    var conta= document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML= conta.substring(0,conta.length -1)
}
function limpar(){
    document.getElementById('resultado').innerHTML=''
}
function total(){
    var equaçao= document.getElementById('resultado').innerHTML;
    if(equaçao){
    document.getElementById('resultado').innerHTML= eval(equaçao)
    }else{
        document.getElementById('resultado').innerHTML=''
    }
}