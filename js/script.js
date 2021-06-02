$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease',
		infinite: false,
	});
});

//Подключаю действие при нажатии на бургер, должно открываться меню
const menuBar = document.querySelector('.menu-bar');
const menuBlock = document.querySelector('.menu-block')
const menuClose = document.querySelector('.menu-close')



const ANIMATION_SPEED = 2000
const addDeleteActive = function () {
	menuBlock.classList.toggle('active')
}
menuBar.addEventListener('click', addDeleteActive)
menuClose.addEventListener('click', addDeleteActive)

// setTimeout(deleteActive, 5000)
setTimeout(() => {
	addDeleteActive
}, ANIMATION_SPEED)
