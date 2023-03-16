/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, EffectFade, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.slider-projects')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-projects', {

			modules: [Autoplay, EffectFade, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			// loop: true,

			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация
			pagination: {
				el: '.slider-projects .slider-projects__progressbar',
				type: "progressbar",
				progressbarFillClass: 'progressbar-trumb'
			},

			// События
			on: {
				init: function (swiper) {
					document.querySelector('.slider-projects__controls-num_all').innerHTML =
					swiper.slides.length >= 10
					? swiper.slides.length
					: '0' + swiper.slides.length
				},
				slideChange: function (swiper) {
					document.querySelector('.slider-projects__controls-num').innerHTML =
					swiper.realIndex < 9 ? '0' + ++swiper.realIndex : ++swiper.realIndex
				}

			}
		});
	}

	if (document.querySelector('.reviews-slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews-slider', {

			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			speed: 800,

			// Пагинация
			pagination: {
				el: '.reviews-slider .reviews-slider__progressbar',
				type: "progressbar",
				progressbarFillClass: 'progressbar-trumb'
			},
			navigation: {
				nextEl: '.reviews-slider .button-next',
				prevEl: '.reviews-slider .button-prev',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				478: {
					slidesPerView: 1.7,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2.3,
					spaceBetween: 30,
				},
			},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});