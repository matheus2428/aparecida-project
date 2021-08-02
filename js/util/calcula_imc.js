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
    var pesoVal = validaPeso(peso);
    var alturaVal = validaAltura(altura); 

    if(!pesoVal){
        pesoVal=false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    if(!alturaVal){
        alturaVal=false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaVal && !pesoVal){
        tdImc.textContent = "Altura e peso inválidos";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaVal && pesoVal){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    
    imc = peso / (altura*altura);

    return imc.toFixed(2);;
}