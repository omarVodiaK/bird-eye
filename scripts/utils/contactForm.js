
function displayModal() {
const modal = document.getElementById("contact_modal");
modal.style.display = "block"; 
}

const closeBtn = document.getElementById("close");
const modalClose = document.getElementById("contact_modal");

function close() {
    modalClose.style.display = "none";
    document
        .getElementById("form_modal")
        .reset(); //reset fonctionne qu'avec la balise form
        
}
closeBtn.addEventListener("click", close);
