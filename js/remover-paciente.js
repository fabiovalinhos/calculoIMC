var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){

    if (event.target.tagName == "TD") {
        
        event.target.parentNode.classList.add("fadeOut");
    
        setTimeout(function(){
            
            event.target.parentNode.remove();
        }, 500);
    }
    
    
    
    // ou

    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;

    // paiDoAlvo.remove();
});

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("fui clicado com duplo click");
//         this.remove();
//     });

// });