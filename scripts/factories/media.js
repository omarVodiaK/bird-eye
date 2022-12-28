class MediaFactory {
  constructor(data, photographerName) {
    if (data.hasOwnProperty("image")) {
      return new Image(data, photographerName);
    } else if (data.hasOwnProperty("video")) {
      return new Video(data, photographerName);
    } else {
      return "Exemple texte";
    }
  }
}



class Image {
  constructor(data, photographerName) {
    this.photographerName = photographerName;
    this.data = data;
  }
  afficherMedia() {
    const article = document.createElement("article");
    article.innerHTML = `
   <h2>image ${this.data.title}</h2>
       `;
const mediaImage = document.createElement("img");
mediaImage.src = "./assets/" + this.photographerName + "/" + this.data.image;
mediaImage.alt = this.data.title;
article.appendChild(mediaImage);
       return article;
  }

}

class Video {
  constructor(data, photographerName) {
    this.title = data.title;
    this.photographerName = photographerName;
  }
  afficherMedia() {
    const article = document.createElement("article");
    article.innerHTML = `
<h2>${this.title}</h2>

    `;
    return article;
    
  }

}

// Création d'une balise img
const myImage = document.createElement('img')

// Initialisation de la variable qui contiendra le nom du dossier
let imageSrc = photgraphers.name

// Nettoyage du nom : on vire le dernier espace et tout ce qu'il y a après
const lastIndex = imageSrc.lastIndexOf(" ");
imageSrc = imageSrc.substring(0, lastIndex);

// Option : remplace le tiret dans le nom du dossier par un espace
//imageSrc = imageSrc.replaceAll('-', ' ')

// Ajout du nom de l'image
imageSrc += '/' + media.src

//  On renseigne l'attribut src de l'image
myImage.src = imageSrc

// On ajoute l'image à la page web
const rootElt = document.getElementById('medias')
rootElt.appendChild(myImage)

/*data.foEeach(photographer => { })
photographer.name.substring(0, photographer.name.lastIndexOf(' ')).replaceAll('-', ' ');


/*récupération du preom 3e essaie 
let str = photographers.json.name;
let lastIndex = str.lastIndexOf("");
str = str.substring(0, lastIndex);
str.replaceAll('-', ' ');

*/

/*récupération du prénom 2e essaie
name.split(' '); 
name.split(' ').slice(0, -1).join(' '); 
var firstName = name.split(' ').slice(0, -1).join(' ');


/*récupération du prénom 1er essaie 
let recupName={
  "userId": 1,
  "firstName": "firstname",
}
recupName.firstName;

*/
















