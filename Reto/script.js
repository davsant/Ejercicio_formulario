function alerta(){
    var nombre = document.getElementById("nom").value;
    if (nombre.length>0){
        alert (nombre.toUpperCase())
    }

}
function activar(){
    var apellido = document.getElementById("ape").value;
    var boton = document.getElementById("bto")
    if (apellido.length>0){
        boton.disabled = false
    }
}

function checks(){
    var valor = document.getElementById("escondido");
    var radio1 = document.getElementById("si");
    var radio2 = document.getElementById("no");
    if (radio1.checked){
        valor.style.display = "block"
    }else{
        valor.style.display = "none"
    }
}


function verificacion(){
    var con1 = document.getElementById("contra1");
    var con2 = document.getElementById("contra2");

    if (con1.value == con2.value){
        con1.style.border = "2px solid green";
        con2.style.border = "2px solid green";
    }else{
        con1.style.border = "2px solid red";
        con2.style.border = "2px solid red";
        
    }
}
