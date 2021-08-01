function buildTr(paciente){
    
    //Criando elementos do JavaScript para o HTML5
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = buildTd(paciente.nome, "info-nome");
    var pesoTd = buildTd(paciente.peso, "info-peso");
    var alturaTd = buildTd(paciente.altura, "info-altura");
    var gorduraTd = buildTd(paciente.gordura, "info-gordura");
    var imcTd = buildTd(paciente.imc, "info-imc");
    //Adicionando os conteúdos dos inputs nas tags HTML
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;
    //Adicionando tags filhas ás tags mães
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    addToTable(pacienteTr);
}