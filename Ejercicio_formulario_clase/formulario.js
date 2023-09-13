function puntoUno() {
    var nombre = document.getElementById("uno").value;
    // nombre = nombre.toUpperCase();
    alert(nombre.toUpperCase());
}

function puntoDos(){
    var apellido = document.getElementById("dos");
    var boton = document.getElementById("tres");
    if (apellido.value.length > 0) {
        boton.disabled = false; 
    } else {
        boton.disabled = true;
    }
}

function puntoTres(){
    var inputSi=document.getElementById("cuatro");
    var inputNo=document.getElementById("cinco");
    var div = document.getElementById("seis");
    if (inputSi.checked){
        div.innerHTML= `
        <label for='siete'> Opción uno
        <input type="checkbox" id="siete">
        </label>
        <label for='ocho'> Opción dos
        <input type="checkbox" id="ocho">
        </label>
        <label for='nueve'> Opción tres
        <input type="checkbox" id="nueve">
        </label>
        `;
    }else if (inputNo.checked){
        div.innerHTML="";
    }
}

function valipassw() {
    let passw = document.getElementById("passw");
    let passw2 = document.getElementById("passw2");
    
    if (passw.value === passw2.value) {
        passw.style.border = "2px solid green";
        passw2.style.border = "2px solid green";
        // passw.style.backgroundColor = "green";
        // passw2.style.backgroundColor = "green";
    } else {
        passw.style.border = "2px solid red";
        passw2.style.border = "2px solid red";
        // passw.style.backgroundColor = "red";
        // passw2.style.backgroundColor = "red";
    }
}
