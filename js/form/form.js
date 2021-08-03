
var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click", function(event){
//Faz com que o botão não faça o comportamento padrão (enviar e recarregar a página)
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
//Declaração do objeto 'paciente'
    var paciente = getFormInfo(form);
//Monta a Tr do paciente novo
    buildTr(paciente);
//Reseta os campos depois de enviar as informações
    form.reset();
});

function exibeMsgErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.classList.add("botao-erro");
    ul.innerHTML = "";
    
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
    ul.style.display = "block";
}

function validaPaciente(paciente){
    var erros = [];
    if(paciente.nome.length == 0) erros.push ("Informe o nome do paciente!")
    if(!validaPeso(paciente.peso) || paciente.peso.length == 0) erros.push("Peso inválido!")
    if(!validaAltura(paciente.altura) || paciente.altura.length == 0) erros.push(" Altura inválida!")
    if(paciente.gordura.length == 0) erros.push ("Informe o % de gordura do paciente!")

    return erros;
}
