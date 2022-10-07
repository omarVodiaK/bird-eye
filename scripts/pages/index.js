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
    .then((json) => json.photographers//on utilise photographers dans json
    //  console.log(this.photographers);
    )
    .catch(function () {
      this.dataError = true;
    });

  // et bien retourner le tableau photographers seulement une fois
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const photographers  = await getPhotographers();
 displayData(photographers);
}

init();
