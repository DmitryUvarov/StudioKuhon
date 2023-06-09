/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, EffectFade, Pagination, Grid } from 'swiper';
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

	for (const mobileSlider of document.querySelectorAll('.slider-cart')) {
        if (mobileSlider) {
            (function () {
                "use strict";

                const breakpoint = window.matchMedia("(max-width:767px)");
                let slider;

                const enableSwiper = function () {
                    slider = new Swiper('.slider-cart', {
						modules: [Navigation],
						observer: true,
						observeParents: true,
						speed: 800,
						slidesPerView: 'auto',
						spaceBetween: 43,
						navigation: {
							nextEl: '.cart .button-next',
							prevEl: '.cart .button-prev',
						},
						breakpoints: {
							768: {
								slidesPerView: 'auto',
								spaceBetween: 20,
							},
							992: {
								slidesPerView: 'auto',
								spaceBetween: 43,
							},
						},
					});
                };

                const breakpointChecker = function () {
                    if (breakpoint.matches === true) {
                        if (slider !== undefined) slider.destroy(true, true);

                        return;
                    } else if (breakpoint.matches === false) {
                        return enableSwiper();
                    }
                };

                breakpoint.addListener(breakpointChecker);
                breakpointChecker();
            })();
        }

    }

	// contact-cart__slider

	if (document.querySelector('.contact-cart__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.contact-cart__slider', {

			modules: [Navigation, Pagination, Grid],
			observer: true,
			observeParents: true,
			speed: 800,
			grid: {
				rows: 2,
				fill: 'row'
			},
			// Пагинация
			pagination: {
				el: '.contact-cart__slider .contact-cart__progressbar',
				type: "progressbar",
				progressbarFillClass: 'progressbar-trumb'
			},
			navigation: {
				nextEl: '.contact-cart__slider .button-next',
				prevEl: '.contact-cart__slider .button-prev',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				478: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
			},

		});
	}
	if (document.querySelector('.similar__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.similar__slider', {

			modules: [Navigation, Pagination, Grid],
			observer: true,
			observeParents: true,
			speed: 800,

			// Пагинация
			pagination: {
				el: '.similar__slider .similar__progressbar',
				type: "progressbar",
				progressbarFillClass: 'progressbar-trumb'
			},
			navigation: {
				nextEl: '.similar__slider .button-next',
				prevEl: '.similar__slider .button-prev',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1.3,
					spaceBetween: 15,
				},
				478: {
					slidesPerView: 1.8,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2.6,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3.15,
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