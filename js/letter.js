var contactsLink = document.querySelector(".write-to-us-link");
var letterPopup = document.querySelector(".modal-letter");
var letterClose = letterPopup.querySelector(".modal-close");
var letterForm = letterPopup.querySelector(".letter-form");
var letterName = letterPopup.querySelector(".letter-name-icon");
var letterEmail = letterPopup.querySelector(".letter-email-icon");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.add("modal-show");

  if (storage) {
    letterName.value = storage;
    letterEmail.focus();
  } else {
    letterName.focus();
  }
});

letterClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.remove("modal-show");
  letterPopup.classList.remove("modal-error");
});

letterForm.addEventListener("submit", function (evt) {
  if (!letterName.value || !letterEmail.value) {
    evt.preventDefault();
    letterPopup.classList.remove("modal-error");
    letterPopup.offsetWidth = letterPopup.offsetWidth;
    letterPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", letterName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (letterPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      letterPopup.classList.remove("modal-show");
      letterPopup.classList.remove("modal-error");
    }
  }
});
