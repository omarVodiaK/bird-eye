//Mettre le code JavaScript lié à la page photographer.html
function photographerFactory(data) {
    const {name, portrait, price, city, country, tagline } = data;
  
    const picture = `assets/photographers/Photographers_Photos/${portrait}`;
  
    function getUserCardDOM() {
      const article = document.createElement("article");
      article.innerHTML = `
     <img src="${picture}">
     <h2>${name}</h2>
     <p class="pays">${city + ", " + country}</p>
     <p class="tagline"> ${tagline}</p>
     <p class="tarif"> ${price} €/jour</p>
    
         `;
      return article;
    }
    return {getUserCardDOM };
  }
  