console.log('foi')
const swiper = new Swiper('.swiper', {
    // loop: true,
    grabCursor: true,
    spaceBetween: 10,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive Breakponits
    breakpoints: {
        0:{
            slidesPerView: 1.2
        },
        600:{
            slidesPerView: 2
        },
        1000:{
            slidesPerView: 3
        }
    }
});


