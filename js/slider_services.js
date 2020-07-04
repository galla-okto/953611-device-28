var slidesServices = document.querySelectorAll(".services-slide");
var buttonServices = document.querySelectorAll(".services-item");
var i=0;
var j=0;
var buttonServicesClickHandler = function(evt) {
  evt.preventDefault();

  for (j = 0; j < slides.length; j++) {
    slidesServices[j].classList.remove("services-slide-current");
  }
  slidesServices[evt.target.value].classList.add("services-slide-current");

  for (j = 0; j < dots.length; j++) {
    buttonServices[j].classList.remove("services-item-active");
  }
  buttonServices[evt.target.value].classList.add("services-item-active");
}

for (i = 0; i < dots.length; i++) {
  buttonServices[i].addEventListener("click", buttonServicesClickHandler);
}
