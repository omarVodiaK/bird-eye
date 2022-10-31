function photographerFactory(data) {
  const { id,name, portrait, price, city, country, tagline } = data;

  const picture = `assets/photographers/Photographers_Photos/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.innerHTML = `
   <a href="./././photographer.html?${id}"> 
   <img src="${picture}">
   <h2>${name}</h2>
   </a>   
   <p class="pays">${city + ", " + country}</p>
   <p class="tagline"> ${tagline}</p>
   <p class="tarif"> ${price} €/jour</p>
  
       `;
    return article;
  }
  return {getUserCardDOM };
}

/*
function photographerFactory(data) {
    const { name, portrait, price, city, country, tagline } = data;

    const picture = `assets/photographers/Photographers_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("alt", ""); /*ajout de l'attribut alt à l'image, le alt doit être vide comme ça nous a été demandé*/
/*    img.setAttribute("src", picture)   /*Définit la valeur d'un attribut sur l'élément spécifié. Si l'attribut existe déjà, la valeur est mise à jour ; sinon, un nouvel attribut est ajouté avec le nom et la valeur spécifiés. */
/*   const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const pays = document.createElement( 'p' ); 
        pays.classList.add("pays");
        pays.textContent = city +', '+ country;  
        const status = document.createElement( 'p' );
        status.classList.add("tagline");
        status.textContent = tagline;
        const tarif = document.createElement( 'p' );
        tarif.classList.add("tarif");
        tarif.textContent = price + "€/jour";
        article.appendChild(img); /*appendchild va créer html*/
/* article.appendChild(h2);
        article.appendChild(pays);
        article.appendChild(status);
        article.appendChild(tarif);
        return (article);
    }
    return { getUserCardDOM }
}


*/
