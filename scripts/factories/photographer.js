function photographerFactory(data) {
    const { name, portrait, price, city, country, tagline } = data;

    const picture = `assets/photographers/Photographers_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("alt", ""); /*ajout de l'attribut alt à l'image, le alt doit être vide comme ça nous a été demandé*/
        img.setAttribute("src", picture)   /*Définit la valeur d'un attribut sur l'élément spécifié. Si l'attribut existe déjà, la valeur est mise à jour ; sinon, un nouvel attribut est ajouté avec le nom et la valeur spécifiés. */
        const h2 = document.createElement( 'h2' );
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
        article.appendChild(img); /*appendchild va générer des données*/
        article.appendChild(h2);
        article.appendChild(pays);
        article.appendChild(status);
        article.appendChild(tarif);
        return (article);
    }
    return { getUserCardDOM }
}


/*
function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/Photographers_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}
*/