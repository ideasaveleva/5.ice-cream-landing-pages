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


const addDeleteActive = function () {
	menuBlock.classList.toggle('active')
}

menuBar.addEventListener('click', addDeleteActive)
menuClose.addEventListener('click', addDeleteActive)

//Подключаю события при клике на ссылку или на кнопку
const bodyButtons = document.getElementById('buttons')

bodyButtons.addEventListener('click', event => {
	if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON')
		alert(`Вы нажали на кнопку: ${event.target.innerHTML}`)
})
