// Slide
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 0.9,
        slideShadows: false,
    },
});


//Slide content
let cards = document.querySelectorAll(".swiper-slide-content");

for (let card of cards) {
  card.addEventListener('click', (e) => {
    card.classList.toggle('flip');
  });
}
