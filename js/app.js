$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		appendDots: '.slider-dots',
		dots: true,
		dotsClass: 'dots',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerPadding: '10px',
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {

					slidesToShow: 1,

				}
			}
		]

	})


	$('#job-warper').slick({

		arrows: false,
		centerMode: true,
		centerPadding: '100px',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 1
				}
			}
		]

	})
	$('.category-slider').slick({
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	})

	$('#skill-warper').slick({

		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 1
				}
			}
		]

	})

	$('.client-warper').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '20px',
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '20px',
					slidesToShow: 1
				}
			}
		]

	})

	$('.content-warper').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 1
				}
			}
		]

	})


});


const iconMenu = document.getElementById("icon-bar");
const menu = document.getElementById("icon-menu");
iconMenu.addEventListener("click", () => {
	if (menu.className === "open") {
		menu.classList.remove("open");
	}
	else {
		menu.classList.add("open")
	}
})