/*
alert("Hola este es mi Javascript");

let nombre = "Mario";

console.log(nombre);


//SELECCIONAR ELEMENTOS

let contenidotitulo = "Nombre"; //Puedes cambiar el nombre de aca
console.log(contenidotitulo);

let titulo = document.querySelector (".fuente-acento");
titulo.innerHTML = contenidotitulo;



//CONDICIONALES

let cambiartitulo = titulo.innerText;
console.log(cambiartitulo);

if (cambiartitulo == "Nombre" ) {
    titulo.innerHTML = "Otro"; //Aca tambien puedes cambiar el nombre
}
else {
    console.log("Fracasaste cambiando el nombre");
}



//FUNCIONES

let nombre = "Alex";
let ciudad = "Cali";
let cargo = "Jefe";

let parrafo = document.querySelector(".Parrafo1");

function cambiarparrafo(nombre, ciudad, cargo) {
    let contenido = `Mi nombre es ${nombre}, nací en la ciudad de ${ciudad}; actualmente laboro como ${cargo} en una gran empresa tecnológica de Colombia, me he enriquezido muchisimo de aprendizajes, 
    pero me encantaria enfocarme en lo que mas le saco gusto que es la programación; allí veo mi futuro.`;

    return contenido;
}

parrafo.innerText = cambiarparrafo(nombre, ciudad, cargo);


//MENU

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

*/


//FORMULARIO ------------ REVISAR


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});