const PANTALLAS = {
  FIGHT: "fight.html",
  ACT: "act.html",
  ITEM: "item.html",
  MERCY: "mercy.html"
};

// Actualiza la caja de diálogo según la acción seleccionada
function accion(tipo) {
  const cajaDialogo = document.getElementById("dialogue-box");
  if (!cajaDialogo) return;

  if (tipo === "FIGHT") {
    cajaDialogo.innerHTML = "* ¡Atacas al enemigo y causas 9999 de daño!";
  } else if (tipo === "ACT") {
    cajaDialogo.innerHTML = "* Miras al enemigo. No hay nada que analizar.";
  } else if (tipo === "ITEM") {
    cajaDialogo.innerHTML = "* Revisas tus bolsillos... ¡Tienes una Torta de Elote!";
  } else if (tipo === "MERCY") {
    cajaDialogo.innerHTML = "* Intentas huir, pero el combate apenas comienza.";
  }
}

// Abre la pantalla HTML correspondiente usando window.location.href
function mostrarPantalla(tipo) {
  const destino = PANTALLAS[tipo];
  if (!destino) return;

  // Evita recargar en bucle si ya estamos dentro de esa pantalla
  const paginaActual = window.location.pathname.split("/").pop();
  if (paginaActual === destino) return;

  accion(tipo);

  // Pequeña pausa para que se alcance a leer el diálogo antes de cambiar de pantalla
  setTimeout(function () {
    window.location.href = destino;
  }, 500);
}

// Conecta automáticamente los botones de index.html cuando carga el menú principal
window.addEventListener("DOMContentLoaded", function () {
  const botonesMenu = document.querySelectorAll("#menu-buttons span");

  botonesMenu.forEach(function (boton) {
    const texto = boton.textContent.toUpperCase();
    const tipo = Object.keys(PANTALLAS).find(function (clave) {
      return texto.includes(clave);
    });

    if (tipo) {
      boton.style.cursor = "pointer";
      boton.addEventListener("click", function () {
        mostrarPantalla(tipo);
      });
    }
  });
});
