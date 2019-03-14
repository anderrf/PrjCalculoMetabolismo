// This is a JavaScript file

$(document).on("click", "#btnCalculo", function(){
  
  var $nome = $("#nome").val();
  
  var $sexo;
  if(btnMasc.Checked){
    $sexo = true;
  }
  else if(btnFem.Checked){
    $sexo = false;
  }

  var $idade = $("#idade").val();

  var $peso = $("#peso").val();

  var $altura = $("#altura").val();
  
  var $taxaAtividade;
  if($("#taxaAtividade").val() == "Sedentário (pouco ou nenhum exercício)"){
    $taxaAtividade = 1.2;
  }
  else if($("#taxaAtividade").val() == "Levemente ativo (exercício leve 1 a 3 dias por semana)"){
    $taxaAtividade = 1.375;
  }
  else if($("#taxaAtividade").val() == "Moderadamente ativo (exercício moderado faz esportes 3 a 5 dias por semana)"){
    $taxaAtividade = 1.55;
  }
  else if($("#taxaAtividade").val() == "Altamente ativo (exercício pesado de 5 a 6 dias por semana)"){
    $taxaAtividade = 1.725;
  }
  else if($("#taxaAtividade").val() == "Extremamente ativo (exercício pesado diariamente e até 2 vezes por semana)"){
    $taxaAtividade = 1.9;
  }

  var $imb
  if($sexo == true){
    $imb = $taxaAtividade * (66 + ((13.7 * $peso) + ( 5 * $altura) - (6,8 * $idade)))
  }

});