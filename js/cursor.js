document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez votre curseur personnalisé
  let cursor = document.querySelector(".custom__cursor");

  // Variable pour garder une trace de l'état du curseur
  let isOnInteractiveElement = false;

  // Ajoutez un écouteur d'événement pour le mouvement de la souris
  document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    // Vérifiez si le curseur est sur un élément interactif
    if (e.target.classList.contains("cursor__hover")) {
      // Si oui, agrandissez le curseur et mettez à jour l'état
      cursor.style.transform = "scale(3)";
      isOnInteractiveElement = true;
    } else {
      // Si le curseur n'est pas sur un élément interactif, réinitialisez la taille du curseur
      if (!isOnInteractiveElement) {
        cursor.style.transform = "scale(1)";
      }
      // Mettez à jour l'état
      isOnInteractiveElement = false;
    }
  });
});
