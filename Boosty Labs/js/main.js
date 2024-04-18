// BURGER MENU
const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});


// RECENT SWIPER

var swiper = new Swiper(".why__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      1200:{
          spaceBetween: 30,
          slidesPerView: 3,
      },
      1110:{
          spaceBetween: 30,
          slidesPerView: 3,
      },
      800:{
          spaceBetween: 30,
          slidesPerView: 2,
      },
      0:{
        slidesPerView: 1,
      }
  },
});


var swiper = new Swiper(".recent__swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      1180:{
          spaceBetween: 30,
          slidesPerView: 2,
      },
      0:{
        spaceBetween: 30,
        slidesPerView: 1,
      }
  },
});


var swiper = new Swiper(".client__swiper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


var swiper = new Swiper(".might__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      1200:{
          spaceBetween: 30,
          slidesPerView: 3,
      },
      1110:{
          spaceBetween: 30,
          slidesPerView: 3,
      },
      800:{
          spaceBetween: 30,
          slidesPerView: 2,
      },
      0:{
        slidesPerView: 1,
      }
  },
});

var swiper = new Swiper(".saccessful__swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    1200:{
        spaceBetween: 30,
        slidesPerView: 3,
    },
    1110:{
        spaceBetween: 30,
        slidesPerView: 3,
    },
    800:{
        spaceBetween: 30,
        slidesPerView: 2,
    },
    0:{
      slidesPerView: 1,
    }
},
});

var swiper = new Swiper(".does__swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    1200:{
        spaceBetween: 30,
        slidesPerView: 3,
    },
    1110:{
        spaceBetween: 30,
        slidesPerView: 3,
    },
    800:{
        spaceBetween: 30,
        slidesPerView: 2,
    },
    0:{
      slidesPerView: 1,
    }
},
});

var swiper = new Swiper(".mission__swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
