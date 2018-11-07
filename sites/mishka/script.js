//MobileMenu
var open = document.querySelector(".page-header__btn--open");
var menu = document.querySelector(".main-navigation__items");
var logo = document.querySelector(".page-header__logo");
var close = document.querySelector(".page-header__btn");
var logotype = document.querySelector(".page-header__logo--bot");
//Slider
var slide = document.querySelectorAll(".slider");
var currentSlide = 0;
var arrowLeft = document.querySelector(".reviews__btn--left");
var arrowRight = document.querySelector(".reviews__btn--right");

//MobileMenu
open.addEventListener("click", function(event) {
	event.preventDefault();
	menu.classList.add("js-open");
  logo.classList.add("js-open");
	logotype.classList.add("js-close");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	menu.classList.remove("js-open");
	logo.classList.remove("js-open");
	logotype.classList.remove("js-close");
});

//Slider
arrowLeft.addEventListener("click", function() {
	slide[currentSlide].className = 'slider';
currentSlide = currentSlide-1 < 0 ? slide.length-1 : currentSlide - 1;
slide[currentSlide].className = 'slider visible-left';
});

arrowRight.addEventListener("click", function() {
	slide[currentSlide].className = 'slider';
currentSlide = (currentSlide+1)%slide.length;
slide[currentSlide].className = 'slider visible-right';
});
