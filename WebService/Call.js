$(document).ready(function(){
    var Executar = document.querySelector("#Executar");

    Executar.addEventListener("click", function(){
        

        var obj = {};
        var toUrl = "https://virtserver.swaggerhub.com/LinsDeveloper/NeverLoss/1.0.0/inventory";
        var method = "POST";

        WebService.Init(obj,toUrl,CallBack,method)
        
     
});

});






var CallBack = function(resposta){
    var Resultado = document.querySelector("#Resultado");

    Resultado.innerHTML = JSON.stringify(resposta.slideshow);
}