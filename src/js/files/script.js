// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


window.addEventListener('load', padeLoad)

function padeLoad() {
    const htmlTag = document.documentElement
    document.addEventListener('click', (event) => {
        const targetElement = event.target



        if (!targetElement.closest('.filters-design__body') || targetElement.closest('.filters-design__close-btn') && document.querySelector('.filter-design-open')) {
            htmlTag.classList.remove('filter-design-open')
        }
        if (targetElement.closest('.top-filters-design__button')) {
            htmlTag.classList.add('filter-design-open')
        }



        if (targetElement.closest('.spoller-filter-desin__item') && !targetElement.closest('.spoller-filter-desin__item.active')) {
            addSortItem(targetElement.closest('.spoller-filter-desin__item'))
            return
        } else if (targetElement.closest('.spoller-filter-desin__item.active')) {
            removeSortItem(targetElement.closest('.spoller-filter-desin__item.active'))
        }
        if (targetElement.closest('.current-filter-desin__item')) {
            removeCurrentItem(targetElement.closest('.current-filter-desin__item'))
        }


        if (htmlTag.closest('.menu-open') && targetElement.closest('.header__cart-button')) {
            htmlTag.classList.remove('lock')
            htmlTag.classList.remove('menu-open')
        }

        if (htmlTag.closest('.cart-open') && !targetElement.closest('.header') || targetElement.closest('.slider-cart__close') || targetElement.closest('.icon-menu')) {
            htmlTag.classList.remove('cart-open')
        }
        if (targetElement.closest('.header__cart-button')) {
            htmlTag.classList.toggle('cart-open')
        }


        if (targetElement.closest('.slide-contact-cart__close')) {
            targetElement.closest('.swiper-slide').remove()

            if (!document.querySelector('.contact-cart__slide')) {
                document.querySelector('.contact-cart__slider').remove()
            }
        }



    })


    function addSortItem(item) {
        const itemsBody = document.querySelector('.filters-design__current')
        const div = document.createElement('div')

        div.classList.add('current-filter-desin__item')
        div.setAttribute('data-param', item.dataset.param)
        div.innerHTML = item.innerHTML

        itemsBody.append(div)
        item.classList.add('active')
    }
    function removeSortItem(item) {
        document.querySelector(`[data-param="${item.dataset.param}"]`).remove()
        item.classList.remove('active')
    }
    function removeCurrentItem(item) {

        item.classList.add('remove')

        setTimeout(() => {
            item.remove()
            document.querySelector(`.spoller-filter-desin__item[data-param="${item.dataset.param}"]`).classList.remove('active')
        }, 500);
    }

    function addActiveClassItemsFilterDesign(dataAtrr) {
        document.querySelector(`.spoller-filter-desin__item[data-param="${dataAtrr}"]`).classList.add('active')
    }

    function checkActiveParam() {
        const items = document.querySelectorAll('.current-filter-desin__item')

        if (items.length) {
            items.forEach(item => {
                addActiveClassItemsFilterDesign(item.dataset.param)
            })
        }
    }
    checkActiveParam()

}