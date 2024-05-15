document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 760) {
    const projectImages = {
      projet1: "../asset/png/passion.png",
      projet2: "../asset/png/prix.png",
      projet3: "../asset/png/error404-projet.png",
    };

    const projectDetailsImage = document.getElementById("projet__image");
    const projectDetails = document.getElementById("projet__details");

    const projects = document.querySelectorAll(".projet");

    projects.forEach((project) => {
      const arrow = project.querySelector(".arrow");
      const title = project.querySelector(".custom__titre_projet");

      project.addEventListener("mouseenter", function () {
        const projectId = this.getAttribute("data-project");
        projectDetailsImage.src = projectImages[projectId];
        projectDetails.style.display = "flex";

        // Ajoute une classe pour activer la transition d'opacité
        projectDetails.classList.add("visible");

        arrow.style.display = "block";

        // Ajoute une classe pour déplacer le titre
        title.classList.add("title-hovered");
      });

      project.addEventListener("mouseleave", function () {
        arrow.style.display = "none";

        // Retire la classe pour restaurer la position du titre
        title.classList.remove("title-hovered");

        // Retire la classe visible pour réinitialiser la transition d'opacité
        projectDetails.classList.remove("visible");
      });
    });

    projectDetails.style.display = "none";
    projects.forEach(
      (project) => (project.querySelector(".arrow").style.display = "none")
    );
  }
});
