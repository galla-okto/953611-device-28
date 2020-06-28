var contactsLink = document.querySelector(".write-to-us-link");
var letterPopup = document.querySelector(".modal-letter");
var letterClose = letterPopup.querySelector(".modal-close");
var letterForm = letterPopup.querySelector(".letter-form");
var letterName = letterPopup.querySelector(".letter-name");
var letterEmail = letterPopup.querySelector(".letter-email");
var letterText = letterPopup.querySelector(".letter-text");

var isStorageSupport = true;
var storageLogin = "";
var storageEmail = "";

try {
  storageLogin = localStorage.getItem("login");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.add("modal-show");

  if (storageLogin && storageEmail) {
    letterName.value = storageLogin;
    letterEmail.value = storageEmail;
    letterText.focus();
  } else if (storageLogin && !storageEmail) {
    letterName.value = storageLogin;
    letterEmail.focus();
  } else {
    letterName.focus();
  }
});

letterClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.remove("modal-show", "modal-error");
});

letterForm.addEventListener("submit", function (evt) {
  if (!letterName.value || !letterEmail.value || !letterText.value) {
    evt.preventDefault();
    letterPopup.classList.remove("modal-error");
    letterPopup.offsetWidth = letterPopup.offsetWidth;
    letterPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", letterName.value);
      localStorage.setItem("email", letterEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (letterPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      letterPopup.classList.remove("modal-show", "modal-error");
    }
  }
});
