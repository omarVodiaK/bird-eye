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
    this.title = data.title;
    this.photographerName = photographerName;
  }
  afficherMedia() {
    const article = document.createElement("article");
    article.innerHTML = `
   <h2>image ${this.title}</h2>
       `;
    return article;
  }
      createMedia() {
        return `
                <a class="photograph-media-link" href="#" role="button" tabindex="0" onclick="displayLightbox(${this._id}, '${this._photographerName}', '${this._media}', '${this._title}'); return false">
                    <img id=${this._id} class="photograph-media-content" src='../assets/photographers/${this._photographerName}/${this._media}' alt= '${this._title}'>
                    </img>
                </a>
                <div class="photograpgh-media-infos">
                    <p>${this._title}</p> 
                    <p class="likes"><span class="likes-number ${this._id}" tabindex="0">${this._likes}</span> <a aria-label="like button" href ="#" role="button" tabindex="0" onclick="addOneLike(${this._id}, ${this._likes}); return false"><em class="fas fa-heart"></em></a></p>
                </div>;`
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

/*const  searchParams = new URLSearchParams(location.search)
const photographerId = +searchParams.get('id')
let photographer
let medias
const lightbox = document.getElementById('media_modal')

const main = document.querySelector('main')
const header = document.querySelector('header')
const orderSelect = document.querySelector('#orderSelect')
const photograph_medias = document.querySelector('#photograph_medias')
const likes = []

//API fetch
;(async () => {
    try {
        const response = await fetch('./data/photographers.json')
		const data = await response.json()

        photographer = data.photographers.find((photographer) => photographer.id === photographerId)
		medias = data.media.filter((media) => media.photographerId === photographerId)
		photograph_medias.style.gridTemplateRows = 'repeat(' + Math.ceil(medias.length / 3) + ', 400px)'

        photographerHeader(photographer)
		likesPrice(medias, photographer.price)
		orderMedias(photographer)
		addEventListener('keydown', (e) => {
			if (lightbox.style.display && lightbox.style.display !== 'none') {
				if (e.code === 'ArrowLeft') {
					return changeMedia('left')
				}
				if (e.code === 'ArrowRight') {
					return changeMedia('right')
				}
				if (e.code === 'Escape') {
					return closeMediaModal()
				}
			}
		})
		orderSelect.onchange = ({target: {value}}) => orderMedias(photographer, value)

		const contactTitle = document.querySelector('#contact_modal h2')
		contactTitle.textContent += ' ' + photographer.name
    }catch (error) {
        console.error(error)
        const errorElement = document.createElement('h2')
        errorElement.classList.add('photographers_error')
        errorElement.textContent = "Une erreur est survenue."
        main.appendChild(errorElement)
    }
})()
//fin de API fetch

//photographer informations
function photographerHeader(photographer) {
	const { name, city, country, tagline, portrait } = photographer
	const nameElement = document.querySelector('.photograph_infos > h1')
	const locationElement = document.querySelector('.photograph_infos > p:nth-child(2)')
	const taglineElement = document.querySelector('.photograph_infos > p:last-child')

	nameElement.textContent = name
	locationElement.textContent = city + ', ' + country
	taglineElement.textContent = tagline

	const header = document.querySelector('.photograph-header')
	const image = document.createElement('img')

	image.src = `./assets/photographers/${portrait}`
	image.alt = photographer.name

	header.appendChild(image)
}
//fin de photographer informations






/*
  class TvShow {
    constructor(name, ) {
        this._title = title
  
    }
  }
  
  // Ici j'instancie quelques classes de films
  const PredatorMovie = new Movie("Predator", 1987, 107)
  const TerminatorMovie = new Movie("Terminator", 1984, 107)
  const AlienMovie = new Movie("Alien", 1979, 117)
  
  // Ici j'instancie quelques séries
  const FriendsTvShow = new TvShow("Friends", 23, 10)
  const ScrubsTvShow = new TvShow("Scrubs", 20, 9)
  const CougarTownTvShow = new TvShow("Cougar Town", 13, 5)
  */
