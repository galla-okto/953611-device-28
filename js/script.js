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

var contactsMapLink = document.querySelector(".contacts-map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

contactsMapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var dotsCounter = 0;
var counter = 0;
var buttonSliderClickHandler = function (evt) {
  evt.preventDefault();

  var index = evt.target.attributes["data-slide-index"].value;

  for (counter = 0; counter < slides.length; counter++) {
    slides[counter].classList.remove("slide-current");
  }
  slides[index].classList.add("slide-current");

  for (counter = 0; counter < dots.length; counter++) {
    dots[counter].classList.remove("current");
  }
  dots[index].classList.add("current");
}

for (dotsCounter = 0; dotsCounter < dots.length; dotsCounter++) {
  dots[dotsCounter].addEventListener("click", buttonSliderClickHandler);
}

var slidesServices = document.querySelectorAll(".services-slide");
var buttonServices = document.querySelectorAll(".services-item");
var buttonCounter = 0;
var buttonServicesClickHandler = function (evt) {
  evt.preventDefault();

  var index = evt.target.attributes["data-button-index"].value;

  for (counter = 0; counter < slides.length; counter++) {
    slidesServices[counter].classList.remove("services-slide-current");
  }
  slidesServices[index].classList.add("services-slide-current");

  for (counter = 0; counter < dots.length; counter++) {
    buttonServices[counter].classList.remove("services-item-active");
  }
  buttonServices[index].classList.add("services-item-active");
}

for (buttonCounter = 0; buttonCounter < dots.length; buttonCounter++) {
  buttonServices[buttonCounter].addEventListener("click", buttonServicesClickHandler);
}
