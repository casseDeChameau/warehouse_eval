let nav = document.querySelector('.nav-main');
window.addEventListener('scroll', () => {
    let currentScroll = scrollY;
    console.log(scrollY);
    if (currentScroll > 200) {
        nav.classList.add('on-scroll');
        $('.nav-main-links a').css('color', '#000').css('opacity', '1');
        console.log($('.nav-main-links'));
    } else {
        nav.classList.remove('on-scroll');
        $('.nav-main-links a').css('color', '#fff').css('opacity', '.5');
    }
});