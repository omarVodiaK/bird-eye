function photographerFactory(data) {
    const { name, portrait, price, id, city, country, tagline } = data;

    const picture = `assets/photographers/Photographers_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)   /*Définit la valeur d'un attribut sur l'élément spécifié. Si l'attribut existe déjà, la valeur est mise à jour ; sinon, un nouvel attribut est ajouté avec le nom et la valeur spécifiés. */
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const num = document.createElement( 'p' );
        num.textContent = id;
        const town = document.createElement( 'p' );
        town.textContent = city;
        const pays = document.createElement( 'p' );
        pays.textContent = country;
        const status = document.createElement( 'p' );
        status.textContent = tagline;
        const tarif = document.createElement( 'p' );
        tarif.textContent = price;
        article.appendChild(img); /*appendchild va générer des données*/
        article.appendChild(h2);
        article.appendChild(num);
        article.appendChild(town);
        article.appendChild(tarif);
        article.appendChild(pays);
        article.appendChild(status);
        return (article);
    }
    return { name, picture, getUserCardDOM }
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