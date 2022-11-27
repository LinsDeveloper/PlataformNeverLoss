$(document).ready(function(){
    var Executar = document.querySelector("#Executar");

    Executar.addEventListener("click", function(){
        

        var obj = {};
        var toUrl = "http://httpbin.org/json";
        var method = "GET";

        WebService.Init(obj,toUrl,CallBack,method)

    });
});



var CallBack = function(resposta){
    var Resultado = document.querySelector("#Resultado");

    Resultado.innerHTML = JSON.stringify(resposta.slideshow);
}