var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    if( this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            //RegExp - expressao regular para buscar o texto (1 parametro) e como deve ser buscado (2 parametro).
            var expressao = new RegExp(this.value, "i");
            //função .test serve para testar algo passando por parâmetro, aqui no caso, o "nome", retorna positivo ou negativo
            if( !expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];

            paciente.classList.remove("invisivel");
        }
    }

});