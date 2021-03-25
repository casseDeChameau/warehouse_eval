// ? change l'état de la nav bar au scroll
let nav = document.querySelector('.nav-main');
window.addEventListener('scroll', () => {
    let currentScroll = scrollY;
    if (currentScroll > 200) {
        nav.classList.add('on-scroll');
        $('.nav-main-links a').addClass('on-scroll');
        $('.burger-btn .stripe').addClass('on-scroll');

    } else {
        nav.classList.remove('on-scroll');
        $('.nav-main-links a').removeClass('on-scroll')
        $('.burger-btn .stripe').removeClass('on-scroll');
    }
});
//? comportement du swiper en header index
let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});
//? redirections href
$('.bw-houses .bloc-content').click(() => {
    window.location.href = "property-single.html";
});
$('.bw-news img').click(() => {
    window.location.href = "single.html";
});
$('.nav-main-logo').click(() => {
    window.location.href = "index.html";
});

//? comportement burger menu
$('.burger-btn').click(() => {
    console.log('click');
    $('.nav-main-links ul').toggleClass('toggle-class');
    $('.burger-btn .stripe').toggleClass('on-click')
});