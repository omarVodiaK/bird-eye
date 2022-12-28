//Mettre le code JavaScript lié à la page photographer.html

let params = new URL(document.location).searchParams;
async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json

  // http://localhost:8080
  //récupération des données
  return fetch("./data/photographers.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then(
      (json) => json.photographers //on utilise photographers dans json
      //  console.log(this.photographers);
    )
    .catch(function () {
      this.dataError = true;
    });

  // et bien retourner le tableau photographers seulement une fois
}

async function getMedia() {
  // Penser à remplacer par les données récupérées dans le json

  // http://localhost:8080
  //récupération des données
  return fetch("./data/photographers.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then(
      (json) => json.media //on utilise photographers dans json
      //  console.log(this.photographers);
    )
    .catch(function () {
      this.dataError = true;
    });

  // et bien retourner le tableau photographers seulement une fois
}

// Affichage des médias du photographe
async function displayMedia(medias, photographerName) {
  const photographMedia = document.querySelector(".photograph-media");

  medias.forEach((media, index) => {
    const mediaType = new MediaFactory(media, photographerName, index);
    const med = document.createElement("article");
    med.innerHTML = mediaType.afficherMedia();
    photographMedia.appendChild(mediaType.afficherMedia());
  });
}

async function init() {
  let name = params.get("name");
  let id = parseInt(params.get("id"));
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  const medias = await getMedia();
  const mediaFilter = medias.filter((m) => m.photographerId == id);
  displayMedia(mediaFilter, name);
  //displayData(photographers);
}

init();
