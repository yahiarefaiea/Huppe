// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Autoplay],

  // Optional parameters
  direction: "horizontal",

  autoplay: {
    delay: 500,
  },
  speed: 1000,
  loop: false,

  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 40,
      loop: true,
    },

    // when window width is <= 800px
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
