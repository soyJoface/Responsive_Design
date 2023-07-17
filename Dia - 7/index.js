const logoImg = document.querySelector('#logo-image');
const nav     = document.querySelector('.nav');

logoImg.addEventListener('click', () => {
    nav.classList.toggle('nav--visible')
})