//EXEMPLO DE FUNÇÕES (4 TIPOS)
//1 FUNÇÃO SEM PARAMETROS E SEM RETORNO

function teste1 (){
    console.log("BOM DIA");

}

teste1();

//2 FUNÇÃO SEM PARAMETROS E SEM RETORNO

function teste2 (){
    var frase = "OUTRA FRASE";
    return frase;

}


var resultado= teste2();
//3 FUNÇÃO SEM PARAMETROS E SEM RETORNO
function muda_texto(valor){

      document.getElementById("paragrafo").innerHTML = valor;

}

//4 FUNÇÃO SEM PARAMETROS E SEM RETORNO

var num1 = 10;
var num2 = 20;

function soma(num1,num2){
    var soma = num1 + num2;
    return soma;

}


var total = soma(num1,num2);
console.log('A soma é: ' + total);


















