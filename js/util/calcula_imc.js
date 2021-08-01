//
//busca pelo id 'primeiro-paciente' e armazena na variável 'paciente'
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i< pacientes.length; i++){

    var paciente = pacientes[i];

    //busca pela classe 'info-peso' e armazena na variável tdPeso
    var tdPeso = paciente.querySelector(".info-peso");

    //pega o conteúdo de texto da variável tdPeso e armazena na variável 'peso'
    var peso = tdPeso.textContent;

    //busca pela classe 'info-altura' e armazena na variável tdAltura
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    //variável booleana para verificar o peso e altura
    var pesoVal = true;
    var alturaVal = true; 

    if(peso <= 0 || peso >= 400){
        pesoVal = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido")
    }
    if(altura <= 0 || altura >= 2.50){
        alturaVal = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido")
    }

    if ((alturaVal=true) && (pesoVal=true)){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    
    imc = peso / (altura*altura);

    return imc.toFixed(2);;
}