
function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    // vamos afectar las minusculas o mayusculas 
    var txtoCifrado= texto.replace(/e/igm, "enter");
    var txtoCifrado= txtoCifrado.replace(/o/igm, "ober");
    var txtoCifrado= txtoCifrado.replace(/i/igm, "imes");
    var txtoCifrado= txtoCifrado.replace(/a/igm, "ai");
    var txtoCifrado= txtoCifrado.replace(/u/igm, "ufat");


    //Quito la imagen cuando este en la consulta
    document.getElementById("imgDerecha").style.display = "none";
    //Debe desaparecer el texto
    document.getElementById("texto").style.display = "none";
    //Debe aparecer el texto en el input derecho
    document.getElementById("texto2").innerHTML = txtoCifrado;    
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.dsiplay = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase()
    // vamos afectar las minusculas o mayusculas 
    var txtoCifrado= texto.replace(/enter/igm, "e");
    var txtoCifrado= txtoCifrado.replace(/ober/igm, "o");
    var txtoCifrado= txtoCifrado.replace(/imes/igm, "i");
    var txtoCifrado= txtoCifrado.replace(/ai/igm, "a");
    var txtoCifrado= txtoCifrado.replace(/ufat/igm, "u");


    //Quito la imagen cuando este en la consulta
    document.getElementById("imgDerecha").style.display = "none";
    //Debe desaparecer el texto
    document.getElementById("texto").style.display = "none";
    //Debe aparecer el texto en el input derecho
    document.getElementById("texto2").innerHTML = txtoCifrado;    
    document.getElementById("inputTexto").style.display = " ";
    document.getElementById("copiar").style.dsiplay = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copiar");
    alert("se copio");
}