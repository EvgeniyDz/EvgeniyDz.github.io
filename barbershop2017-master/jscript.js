// Popup and map
var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password");
var storage = localStorage.getItem("login");
var mapopen = document.querySelector(".js-open");
var mappopup = document.querySelector(".modal-content-map");
var mapclose = mappopup.querySelector(".modal-content-close");
//Slider
var slide = document.querySelectorAll(".slider");
var currentSlide = 0;
var Left = document.querySelector(".button-galery-prev");
var Right = document.querySelector(".button-galery-next");


link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
	if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function(event) {
 	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			popup.classList.remove("modal-error");
		}
	}
});

mapopen.addEventListener("click", function(event) {
 	event.preventDefault();
 	mappopup.classList.add("map-content-show");

});
mapclose.addEventListener("click", function(event) {
 	event.preventDefault();
 	mappopup.classList.remove("map-content-show");
});
window.addEventListener("keydown", function(event) {
 	if (event.keyCode === 27) {
 		if (mappopup.classList.contains("map-content-show")) {
 		mappopup.classList.remove("map-content-show");
 }
 }
});


//Slider
Left.addEventListener("click", function() {
	slide[currentSlide].className = 'slider';
currentSlide = currentSlide-1 < 0 ? slide.length-1 : currentSlide - 1;
slide[currentSlide].className = 'slider show-left';
});

Right.addEventListener("click", function() {
	slide[currentSlide].className = 'slider';
// currentSlide = (currentSlide+1)%slide.length;
currentSlide = currentSlide+1 > 4 ? slide.length-5 : currentSlide + 1;
slide[currentSlide].className = 'slider show-right';
});

//Galery
var images = [
	{
		image: 'img/galery.jpg',		
		description: 'Barbershop',
		size: 'Borodinsky'	
	},
	{
		image: 'img/galery2.jpg',
		description: 'Barbershop',
		size: 'Borodinsky'	
	},
	{
		image: 'img/galery3.jpeg',
		description: 'Barbershop',
		size: 'Borodinsky'	
	},
	{
		image: 'img/galery4.jpg',
		description: 'Barbershop',
		size: 'Borodinsky'	
	},
	{
		image: 'img/galery5.jpg',
		description: 'Barbershop',
		size: 'Borodinsky'	
	}
];

var gallery = $(".galleria");

Galleria.loadTheme('galleria/themes/simplecoding/galleria.simplecoding.js');

$('.slider').click(function() {
	$(".galleria").galleria({
		data_source: images,
		width: 800,
		height: 500,
		clicknext: true
	});
	return false;
});

