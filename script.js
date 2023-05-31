var vez = 1;
var terminou = 0;
var jogadas = 0;
$(document).ready(function(){
    $("#play").click(function(){
        iniciar();
        grade();
    });
    $(document).on("click", ".esp", function(){
        if(terminou == 0){
            let id=$(this).attr("id");
            console.log(id);
            jogo(id);
        }
    }); 
    $(document).on("click", "#rei", function(){
        vez = 1;
        terminou = 0;
        jogadas = 0;
        for(let i = 1; i <= 3;i++){
            for(let x = 1; x <= 3;x++){
                $("#s"+i+x).attr("src", "cubobranco.png");
                $("#s"+i+x).attr("data-value", "0");
            }
        }
        console.log(vez);
        console.log(terminou);
        console.log(jogadas);
    })
})
function jogo(x){
    console.log(x);
    if($("#"+x).attr("data-value") == 0){
        if(vez==1){
            $("#"+x).attr("src", "Cópia de imagemO.png");
            $("#"+x).attr("data-value", vez);
            vez=-1;
        }
        else if(vez==-1){
            $("#"+x).attr("src", "Cópia de imagemX.png");
            $("#"+x).attr("data-value", vez);
            vez=1;
        }
        ganhou();
    }
    console.log(vez);
}
// ($("#1"+i).attr("data-value") == $("#2"+i).attr("data-value")) && ($("#2"+i).attr("data-value") == $("#3"+i).attr("data-value"))
// if($("#1"+i).attr("data-value") == $("#2"+i).attr("data-value") && $("#2"+i).attr("data-value") == $("#3"+i).attr("data-value")){
//     alert("a");
// }
function ganhou(){
    let vencedor = 0;
    jogadas++;
    for (let i = 1; i <= 3;i++){
        if($("#s1"+i).attr("data-value") != 0 && $("#s2"+i).attr("data-value") != 0 && $("#s3"+i).attr("data-value") != 0){
            if($("#s1"+i).attr("data-value") == $("#s2"+i).attr("data-value") && $("#s2"+i).attr("data-value") == $("#s3"+i).attr("data-value")){
                terminou = 1;
                vencedor = $("#s1"+i).attr("data-value");
            }
        }
        
    }
    for (let i = 1; i <= 3;i++){
        if($("#s"+i+"1").attr("data-value") != 0 && $("#s"+i+"2").attr("data-value") != 0 && $("#s"+i+"3").attr("data-value") != 0){
            if($("#s"+i+"1").attr("data-value") == $("#s"+i+"2").attr("data-value") && $("#s"+i+"2").attr("data-value") == $("#s"+i+"3").attr("data-value")){
                terminou = 1;
                vencedor = $("#s"+i+"1").attr("data-value");
            }
        }
        
    }
    if($("#s11").attr("data-value") != 0 && $("#s22").attr("data-value") != 0 && $("#s33").attr("data-value") != 0){
        if($("#s11").attr("data-value") == $("#s22").attr("data-value") && $("#s22").attr("data-value") == $("#s33").attr("data-value")){
            terminou = 1;
            vencedor = $("#s11").attr("data-value");
        }
    }
    if($("#s13").attr("data-value") != 0 && $("#s22").attr("data-value") != 0 && $("#s31").attr("data-value") != 0){
        if($("#s13").attr("data-value") == $("#s22").attr("data-value") && $("#s22").attr("data-value") == $("#s31").attr("data-value")){
            terminou = 1;
            vencedor = $("#s13").attr("data-value");
        }
    }
    if(vencedor != 0 && vencedor ==1){
        alert($("#nomedir").val()+" ganhou!");
    }
    else if(vencedor != 0 && vencedor ==-1){
        alert($("#nomeesq").val()+" ganhou!");
    }
    if(jogadas == 9 && vencedor == 0){
        terminou = 1;
        alert("O jogo empatou");
    }
}
function iniciar(){
    $(".nomes").attr('readonly', true)
}
function grade(){
    $(".apagar").remove();
    $("#meio").append(`
    <ul class="coluna">
        <ul class="fileira">
            <img src="cubobranco.png" width="50" id="s11" class="esp" data-value="0">
            <img src="cubobranco.png" width="50" id="s12" class="esp" data-value="0">
            <img src="cubobranco.png" width="50" id="s13" class="esp" data-value="0">
        </ul>
        <ul class="fileira">
            <img src="cubobranco.png" width="50" id="s21" class="esp" data-value="0">
            <img src="cubobranco.png" width="50" id="s22" class="esp" data-value="0">
            <img src="cubobranco.png" width="50" id="s23" class="esp" data-value="0">
        </ul>
        <ul class="fileira">
            <img src="cubobranco.png" width="50" id="s31" class="esp" data-value="0">
            <img src="cubobranco.png" width="50" id="s32" class="esp" data-value="0">
            <img src="cubobranco.png" width="50" id="s33" class="esp" data-value="0">
        </ul>
        <button id="rei">Reiniciar</button>
    </ul>`);
}