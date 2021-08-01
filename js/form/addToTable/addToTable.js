function addToTable (pacienteTr) {
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    return tabela;
}