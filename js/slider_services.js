'use strict';

var slideIndexServices = 1;
showSlidesServices(slideIndexServices);

function currentSlideServices(n) {
  showSlidesServices(slideIndexServices = n);
}

function showSlidesServices(n) {
  var i;
  var slides = document.getElementsByClassName("services-slide");
  var dots = document.getElementsByClassName("services-item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndexServices = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" services-item-active", "");
  }
  slides[slideIndexServices-1].style.display = "block";
  dots[slideIndexServices-1].className += " services-item-active";
}
