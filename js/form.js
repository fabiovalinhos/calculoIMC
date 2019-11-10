var botaoAdcionar = document.querySelector("#adicionar-paciente");
botaoAdcionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    // Extraindo as informações do paciente no form
    var paciente = obtemPacienteDoFormulario(form);

    // Cria a tr / td
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    console.log(erros);
    if (erros.length > 0 ){
        exibeMensagensDeErro(erros);
        return;
    }

    // Adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes")
    
    tabela.appendChild(pacienteTr);

    // limpar o formulário
    form.reset();
    var mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = "";

});

function exibeMensagensDeErro (erros){
    var ul = document.querySelector('#mensagens-erro');

    // Apaga as mensagens de erros anteriores antes de entrar no forEach para pegar os erros
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculeImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    

    var pacienteTR = document.createElement("tr");
    pacienteTR.classList.add('paciente');

    pacienteTR.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTR.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTR.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTR.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTR.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTR;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push('O nome não pode estar em branco');
    }

    if (!validaPeso(paciente.peso)){
        erros.push('O Peso é inválido');
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é invalida");
    }

    if (paciente.gordura.length == 0){
        erros.push('A gordura do meu paciente não pode estar em branco');
    }

    if (paciente.peso.length == 0){
        erros.push('O peso do paciente não pode estar em branco');
    }

    if (paciente.altura.length == 0){
        erros.push('A altura do paciente não pode estar em branco');
    }
    
    return erros;
}