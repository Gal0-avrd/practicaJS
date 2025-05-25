
//Funciones;

function sumar(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);
    var suma = n1+n2+n3;
    document.getElementById("total").value = suma;
}

function obtener_texto1(){
    var a = document.getElementById("sumar").value;
    alert(a)
}
function obtener_texto2(){
    var a = document.getElementById("h2").innerText;
    alert(a)
}

//DOM

function agregar(){
    document.getElementById("div1").innerHTML = "HOLA <input type='text'>";
}
function aumentar(){
    document.getElementById("div1").append("<br>asdf ");
}
function eliminar(){
    document.getElementById("div1").remove();
}
function vaciar(){
    document.getElementById("div1").innerHTML = "";
}
function aumentar_con_html(){
    document.getElementById("div1").innerHTML += "Hola Mundo <input type='text'>";
}

//CSS

document.getElementById("cambiar_fondo").addEventListener("click", function() {
    document.getElementById("midiv").style.backgroundColor = "red";
});

document.getElementById("cambiar_color").addEventListener("click", function() {
    document.getElementById("midiv").style.color = "black";
});

document.getElementById("borde").addEventListener("click", function() {
    document.getElementById("midiv").style.border = "4px solid blue";
});

document.getElementById("negrita").addEventListener("click", function() {
    document.getElementById("midiv").style.fontWeight = "bold";
});

document.getElementById("clase").addEventListener("click", function() {
    document.getElementById("midiv").classList.add("miestilo");
});

document.getElementById("quitar_clase").addEventListener("click", function() {
    document.getElementById("midiv").classList.remove("miestilo");
});