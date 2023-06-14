var val=0;
var soma=0;
var valor=0;
function n1080(){
    val=1080;
    atualizar(val)
}
function n2000(){
        val=2000
        atualizar(val)
}
function n3500(){
    val=3500
    atualizar(val)
}
function atualizar(val){
    soma=soma+val
    document.getElementById("valor").innerHTML=soma;
}
function comprar(){
    document.getElementById("valor").innerHTML=0;
}