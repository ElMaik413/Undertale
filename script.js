function accion(tipo) {
  const cajaDialogo = document.getElementById("dialogue-box");
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
