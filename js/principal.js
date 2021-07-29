//
//busca pelo id 'primeiro-paciente' e armazena na variável 'paciente'
var paciente = document.querySelector("#primeiro-paciente");

//busca pela classe 'info-peso' e armazena na variável tdPeso
var tdPeso = paciente.querySelector(".info-peso");

//pega o conteúdo de texto da variável tdPeso e armazena na variável 'peso'
var peso = tdPeso.textContent;

//busca pela classe 'info-altura' e armazena na variável tdAltura
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

//variável booleana para verficiar o peso e altura
var pesoVal = true;
var alturaVal = true; 

if(peso <= 0 || peso >= 400){
    pesoVal = false;
    tdImc.textContent = "Peso inválido";
}
if(altura <= 0 || altura >= 2.50){
    alturaVal = false;
    tdImc.textContent = "Altura inválida";
}

if ((alturaVal=true) && (pesoVal=true)){
    var imc = peso/(altura * altura);
    tdImc.textContent = imc;
}
