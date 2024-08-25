// "e"  "enter"
// "i"  "imes"
// "a"  "ai"
// "o"  "ober"
// "u"  "ufat"


const textoUsuario = document.getElementById("textarea-usuario");
const textoEncriptado = document.getElementById("texto-encriptado");
const areaTextoEncriptado = document.getElementById("area-texto-encriptado");
const alertas = document.getElementById("no-texto");
const muñeco = document.getElementById("muñeco");
const copiar = document.getElementById("botones-seccion2");
const requisitos = /^[a-z\s]+$/;

// Función para reiniciar la interfaz
function limpiar() {
  textoUsuario.value = "";
  textoEncriptado.innerHTML = "";
  areaTextoEncriptado.style.display = "none";
  muñeco.style.display = "";
  alertas.style.display = "block";
  copiar.style.display = "none";
}

// Función para ajustar la interfaz al encriptar/desencriptar el texto
function mostrarResultado() {
  areaTextoEncriptado.style.display = "block";
  muñeco.style.display = "none";
  alertas.style.display = "none";
  copiar.style.display = "block";
}

// Función para encriptar el texto
function encriptar(texto = textoUsuario.value) {
  if (textoUsuario.value === "") {
    limpiar();
  } else if (requisitos.test(texto) == false) {
    alert("No se permiten letras mayusculas ni caracteres especiales");
  } else {
    const resultado = texto
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    textoEncriptado.innerHTML = resultado;
    mostrarResultado();
    return resultado;
  }
}

// Función para desencriptar el texto
function desencriptar(texto = textoUsuario.value) {
  if (textoUsuario.value === "") {
    limpiar();
  } else if (requisitos.test(texto) == false) {
    alert("No se permiten letras mayusculas ni caracteres especiales");
  } else {
    const resultado = texto
      .replaceAll("ufat", "u")
      .replaceAll("ober", "o")
      .replaceAll("ai", "a")
      .replaceAll("imes", "i")
      .replaceAll("enter", "e");
    textoEncriptado.innerHTML = resultado;
    mostrarResultado();
    return resultado;
  }
}

// Función para copiar al cortapapeles
function botonCopiar() {
  navigator.clipboard.writeText(textoEncriptado.innerHTML);
}
