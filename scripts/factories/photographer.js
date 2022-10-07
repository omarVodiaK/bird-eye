function photographerFactory(data) {
    const { name, portrait, price } = data;

    const picture = `assets/photographers/Photographers_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const price = document.createElement( 'price' );
        price.textContent = price;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(price);
        return (article);
    }
    return { name, picture, price, getUserCardDOM }
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