import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

Swiper.use([Navigation, Pagination])

const dealsSlider = document.querySelector('.deals-slider')

const swiperCase = new Swiper(dealsSlider, {
  slidesPerView: '5',
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    476: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
})
