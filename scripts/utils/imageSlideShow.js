const closeImageBtn = document.getElementById("closeImageSlideShow");
let slideIndex = 1;

function displayImageSlideShow(element) {
  const modal = document.getElementById("image-slide-show");
  modal.style.display = "block";
  const index = element.target.dataset.index;
  slideIndex = Number(index) + 1;

  showSlides();
}

function closeIMageSlideShow() {
  const modal = document.getElementById("image-slide-show");
  modal.style.display = "none";
}

closeImageBtn.addEventListener("click", closeIMageSlideShow);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

async function displaySlideShowMedia(medias, photographerName) {
  medias.forEach((media) => {
    const mediaType = new MediaFactory(media, photographerName);
    mediaType.afficherMediaSlideShow();
  });
}

async function initSlideShow() {
  let name = params.get("name");
  let id = parseInt(params.get("id"));
  const medias = await getMedia();
  const mediaFilter = medias.filter((m) => m.photographerId == id);
  displaySlideShowMedia(mediaFilter, name);
}

initSlideShow();
