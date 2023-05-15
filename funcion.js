var btnEncriptar = document.getElementById("encriptador");
var btnDesencriptar = document.getElementById("desencriptador");
var advertenciaSinTexto = document.querySelector(".texto-pendiente");
var muneco = document.querySelector(".muneco");
var convertirTexto = document.querySelector(".convertir-texto");
var textoConvertido = document.querySelector(".texto-convertido");
var textoFinal = document.querySelector(".texto-final");
var botonCopiar = document.querySelector(".btn-copy");

eliminarContenedorTextoConvertido();

function capturarClick() {
  return true;
}

function validarTextoParaEncriptar() {
  comprobacionClick = capturarClick()
  cambiarMensaje = sinTextoParaConvertir()
  
  if (comprobacionClick == true && convertirTexto.value.length == 0 ) {
    sinTextoParaConvertir()
  } else if (comprobacionClick == true && convertirTexto.value.length > 0 ) {
    encriptar()
  }
}

function validarTextoParaDesencriptar() {
  comprobacionClick = capturarClick()
  cambiarMensaje = sinTextoParaConvertir()
  
  if (comprobacionClick == true && convertirTexto.value.length == 0 ) {
    sinTextoParaConvertir()
  } else if (comprobacionClick == true && convertirTexto.value.length > 0 ) {
    desencriptar()
  }
}

function capturarTexto() {
  convertirTexto = convertirTexto
  return convertirTexto.value;
}

function sinTextoParaConvertir() {
  eliminarContenedorTextoConvertido()
  mostrarContenedorTextoPendiente()
  return document.querySelector(".mensaje-noencontrado").innerHTML='No ha ingresado ningun texto';
}

function encriptar() {
  eliminarContenedorTextoPendiente();
  mostrarContenedorTextoConvertido();
  
  var convertirTexto = capturarTexto()
  textoConvertido.textContent = encriptarTexto(convertirTexto);
}

function desencriptar() {
  eliminarContenedorTextoPendiente();
  mostrarContenedorTextoConvertido();
  var convertirTexto = capturarTexto()
  textoConvertido.textContent = desencriptarTexto(convertirTexto);
}

function capturarTexto() {
  convertirTexto = convertirTexto
  return convertirTexto.value;
}

function encriptarTexto(mensaje) {
  var mensaje = mensaje;
  var textoFinal = "";

  for(var i = 0;i < mensaje.length; i++) {
    if(mensaje [i] == "e") {
      textoFinal = textoFinal + "enter"
    } else if(mensaje [i] == "i") {
      textoFinal = textoFinal + "imes"
    } else if(mensaje [i] == "a") {
      textoFinal = textoFinal + "ai"
    } else if (mensaje [i] == "o") {
      textoFinal = textoFinal + "ober"
    } else if (mensaje [i] == "u") {
      textoFinal = textoFinal + "ufat"
    } else {
      textoFinal = textoFinal + mensaje[i]
    }
  }
  return textoFinal;
}

function desencriptarTexto(mensaje) {
  var mensaje = mensaje;
  var textoFinal = "";

  for(var i = 0;i < mensaje.length; i++) {
    if(mensaje [i] == "e") {
      textoFinal = textoFinal + "e"
      i = i+4;
    } else if(mensaje [i] == "i") {
      textoFinal = textoFinal + "i"
      i = i+3;
    } else if(mensaje [i] == "a") {
      textoFinal = textoFinal + "a"
      i = i+1;
    } else if (mensaje [i] == "o") {
      textoFinal = textoFinal + "o"
      i = i+3;
    } else if (mensaje [i] == "u") {
      textoFinal = textoFinal + "u"
      i = i+3;
    } else {
      textoFinal = textoFinal + mensaje[i]
    }
  }
  return textoFinal;
}

function btnCopy() {
  var copiarTextoConvertido = textoConvertido;

  copiarTextoConvertido.select();
  copiarTextoConvertido.setSelectionRange(0,-1);
  navigator.clipboard.writeText(copiarTextoConvertido.value);
}

function mostrarContenedorTextoConvertido() {
  eliminarContenedorTextoPendiente();
  textoFinal.classList.remove("ocultar");
  botonCopiar.classList.remove("ocultar");
}

function eliminarContenedorTextoConvertido() {
  textoFinal.classList.add("ocultar");
  botonCopiar.classList.add("ocultar");
}

function mostrarContenedorTextoPendiente() {
  eliminarContenedorTextoConvertido();
  muneco.classList.remove("ocultar");
  advertenciaSinTexto.classList.remove("ocultar");
}

function eliminarContenedorTextoPendiente() {
  muneco.classList.add("ocultar");
  advertenciaSinTexto.classList.add("ocultar");
}