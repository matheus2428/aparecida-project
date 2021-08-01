
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