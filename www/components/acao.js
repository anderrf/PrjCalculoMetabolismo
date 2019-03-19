// This is a JavaScript file

$(document).on("click", "#btnCalculo", function(){
  
  var $nome = $("#nome").val();
  
  var $sexo;
  if("#btnMasc".Checked){
    $sexo = true;
  }
  else if("#btnFem".Checked){
    $sexo = false;
  }

  var $idade = $("#idade").val();

  var $peso = $("#peso").val();

  var $altura = $("#altura").val();
  
  var $taxaAtividade;
  if($("#taxaAtividade").val() == "sedentario"){
    $taxaAtividade = 1.2;
  }
  else if($("#taxaAtividade").val() == "leve"){
    $taxaAtividade = 1.375;
  }
  else if($("#taxaAtividade").val() == "moderado"){
    $taxaAtividade = 1.55;
  }
  else if($("#taxaAtividade").val() == "alto"){
    $taxaAtividade = 1.725;
  }
  else if($("#taxaAtividade").val() == "extremo"){
    $taxaAtividade = 1.9;
  }

  var $imb;
  if($sexo == true){
    $imb = $taxaAtividade * (66 + ((13.7 * $peso) + ( 5 * $altura) - (6,8 * $idade)));
  }
  else if($sexo == false){
    $imb = $taxaAtividade * (655 + ((9.6 * $peso) + (1.8 * $altura) - (4.7 * $idade)));
  }
  $("#imb").val() = $imb;
});