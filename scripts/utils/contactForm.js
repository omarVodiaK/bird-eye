function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

const closeBtn = document.getElementById("close");
const modalClose = document.getElementById("contact_modal");

function close() {
  modalClose.style.display = "none";
  document.getElementById("form_modal").reset(); //reset fonctionne qu'avec la balise form
}
closeBtn.addEventListener("click", close);

// //////////////////////// Récupération des id / ////////////////////////
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let message = document.getElementById("message");

// Utilisation de regex
const nameCharacter = /([A-Za-z-])+$/;
const emailCharacter = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
const messageCharacter = /(a-zA-Z0-9_-])+$/;
// les messages d'erreur
const errors = {
  firstNameError1: "2 caractères minimum",
  firstNameError2: "Seul l'alphabet est accépté",
  lastNameError1: "2 caractères minimum",
  lastNameError2: "Seul l'alphabet est accépté",
  emailError1: "Veuillez entrer une adresse mail valide",
  messageError: "Veuillez entrer votre message",
};

// Fermeture de la modal lorsque que les données sont validées et ouverture de la modal avec le message de remerciement

document
  .getElementById("form_modal")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event);
    if (validateForm()) {
      close();
      return true;
    }
    return false;
  });
//Les fonctions utilisées pour les input
function validateForm() {
    firstNameValid();
  lastNameValid();
  emailValid();
  messageValid();
  if (firstNameValid() && lastNameValid() && emailValid() && messageValid()) {
    return true;
  } else {
    return false;
  }
}

///////////////////////////// Pour firstName et lastName ////////////////////////////
/*On vérifie :
 - si la valeur dans le champs est supérieur à 2 caractères et 
 - si la valeur saisie ne correspond pas aux conditions du regex avec la méthode test()
si ce n'est pas le cas :
 - on affiche un message d'erreur et le cadre du champs devient rouge
 */

 function firstNameValid() {
    if (firstName.value.length < 2) {
      let firstNameMessage = document.getElementById("firstNameError");
      firstNameMessage.innerHTML = errors.firstNameError1;
  
      return false;
    } else if (nameCharacter.test(firstName.value) == false) {
      let firstNameMessage = document.getElementById("firstNameError");
      firstNameMessage.innerHTML = errors.firstNameError2;
  
      return false;
    }
  }

function lastNameValid() {
  if (lastName.value.length < 2) {
    let lastNameMessage = document.getElementById("lastNameError");
    lastNameMessage.innerHTML = errors.lastNameError1;

    return false;
  } else if (nameCharacter.test(lastName.value) == false) {
    let lastNameMessage = document.getElementById("lastNameError");
    lastNameMessage.innerHTML = errors.lastNameError2;

    return false;
  }
}



///////////////////////////// email ////////////////////////////
/*On vérifie si :
 - la valeur saisie correspond aux conditions du regex
si ce n'est pas le cas:
 - on affiche un message d'erreur et le cadre du champs devient rouge
 */
function emailValid() {
  if (emailCharacter.test(email.value) == false) {
    let emailMessage = document.getElementById("emailError");
    emailMessage.innerHTML = errors.emailError1;

    return false;
  } else {
    document.getElementById("emailError").innerHTML = "";

    return true;
  }
}

function messageValid() {
  if (message.value.length < 2) {
    let sendMessage = document.getElementById("messageError");
    sendMessage.innerHTML = errors.messageError;

    return false;
  } else if (messageCharacter.test(message.value) == false) {
    let sendMessage = document.getElementById("messageError");
    sendMessage.innerHTML = errors.messageError;

    return false;
  } else {
    document.getElementById("messageError").innerHTML = "";

    return true;
  }
}
