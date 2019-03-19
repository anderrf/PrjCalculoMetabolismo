// This is a JavaScript file

$(document).on("click", "#btnCalculo", function(){
  
  var nome = $("#nome").val();
  
  var sexo;
  if(($("#sexo").val()) == "male"){
    sexo = true;
  }
  else if(($("#sexo").val()) == "female"){
    sexo = false;
  }

  var idade = $("#idade").val();

  var peso = $("#peso").val();

  var altura = $("#altura").val();
  
  var taxaAtividade = parseFloat($("#taxaAtividade").val());

  var imb;

  if(sexo == true){
    imb = taxaAtividade * (66 + ((13.7 * peso) + ( 5 * altura) - (6,8 * idade)));
  }
  else if(sexo == false){
    imb = taxaAtividade * (655 + ( (9.6 * peso) + (1.8 * altura) - (4.7 * idade)));
  }
  $("#imb").val(imb);
});