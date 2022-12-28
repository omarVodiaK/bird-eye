class MediaFactory {
  constructor(data, photographerName, index) {
    if (data.hasOwnProperty("image")) {
      return new Image(data, photographerName, index);
    } else if (data.hasOwnProperty("video")) {
      return new Video(data, photographerName, index);
    }
  }
}

class Image {
  constructor(data, photographerName, index) {
    this.photographerName = photographerName;
    this.data = data;
    this.index = index;
  }
  afficherMedia() {
    const article = document.createElement("article");
    article.innerHTML = `
   <h2>image ${this.data.title}</h2>
       `;
    const mediaImage = document.createElement("img");
    mediaImage.src = "./assets/photos/" + this.data.image;
    mediaImage.alt = this.data.title;
    mediaImage.className = "photo";
    mediaImage.dataset.index = this.index;
    mediaImage.onclick = displayImageSlideShow;
    article.appendChild(mediaImage);

    const priceImage = document.createElement("span");
    priceImage.className = "tarif";
    priceImage.textContent = `${this.data.price}€/jour`;
    article.appendChild(priceImage);
    return article;
  }

  afficherMediaSlideShow() {
    const imageSlideShow = document
      .getElementById("image-slide-show")
      .getElementsByClassName("modal")[0];
    const mediaImage = document.createElement("img");
    mediaImage.src = "./assets/photos/" + this.data.image;
    mediaImage.alt = this.data.title;
    mediaImage.className = "my-slides";
    imageSlideShow.appendChild(mediaImage);
  }
}

class Video {
  constructor(data, photographerName, index) {
    this.data = data;
    this.photographerName = photographerName;
    this.index = index;
  }
  afficherMedia() {
    const article = document.createElement("article");
    article.innerHTML = `
<h2>${this.data.title}</h2>
    `;
    const mediaVideo = document.createElement("video");
    mediaVideo.src = "./assets/photos/" + this.data.video;
    mediaVideo.className = "video";
    mediaVideo.alt = this.data.title;
    mediaVideo.controls = true;
    mediaVideo.muted = false;
    mediaVideo.dataset.index = this.index;
    mediaVideo.onclick = displayImageSlideShow;
    article.appendChild(mediaVideo);
    return article;
  }

  afficherMediaSlideShow() {
    const imageSlideShow = document
      .getElementById("image-slide-show")
      .getElementsByClassName("modal")[0];
    const mediaVideo = document.createElement("video");
    mediaVideo.src = "./assets/photos/" + this.data.video;
    mediaVideo.className = "video";
    mediaVideo.alt = this.data.title;
    mediaVideo.controls = true;
    mediaVideo.muted = false;
    mediaVideo.className = "my-slides";
    imageSlideShow.appendChild(mediaVideo);
  }
}
