let nav = document.querySelector('.nav-main');
window.addEventListener('scroll', () => {
    let currentScroll = scrollY;
    if (currentScroll > 200) {
        nav.classList.add('on-scroll');
        $('.nav-main-links a').css('color', '#000').add('on-scroll');
    } else {
        nav.classList.remove('on-scroll');
        $('.nav-main-links a').css('color', '#fff').remove('on-scroll');
    }
});
let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});