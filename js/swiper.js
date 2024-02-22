var swiper = new Swiper('.swiper-container-lovelsj1', {
    pagination: '.swiper-pagination-lovelsj1',
    paginationClickable: true,
    spaceBetween: 30,
});

var swiper = new Swiper('.swiper-container-lovelsj2', {
    pagination: '.swiper-pagination-lovelsj2',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

var swiper = new Swiper('.swiper-container-lovelsj3', {
    pagination: '.swiper-pagination-lovelsj3',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next-lovelsj3',
    prevButton: '.swiper-button-prev-lovelsj3'
});