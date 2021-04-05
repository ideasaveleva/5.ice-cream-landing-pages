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

$(function () {
	$('.menuBar').on('click', function () {
		$('nav').slideToggle(200, function () {
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});
});