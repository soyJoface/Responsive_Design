const toggleButton = document.getElementsByClassName('toggle-button')[0];
console.log(toggleButton)
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
console.log(navbarLinks)

toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')
})