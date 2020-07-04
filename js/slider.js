var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var i=0;
var j=0;
var buttonSliderClickHandler = function(evt) {
  evt.preventDefault();

  for (j = 0; j < slides.length; j++) {
    slides[j].classList.remove("slide-current");
  }
  slides[evt.target.value].classList.add("slide-current");

  for (j = 0; j < dots.length; j++) {
    dots[j].classList.remove("current");
  }
  dots[evt.target.value].classList.add("current");
}

for (i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", buttonSliderClickHandler);
}
