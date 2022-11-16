//Navbar Responsiveness
const toggleButton = document.getElementsByClassName('menu-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    toggleButton.classList.toggle('active')
})

//Preloader
let loader = document.getElementById('preloader');

window.addEventListener('load', function () {
    loader.style.display = 'none';
})

//Animate rain 
const rain = document.getElementsByClassName('tuyu')[0];
const container = document.getElementsByClassName('container')[0];

rain.addEventListener('click', () => {
    container.classList.toggle('active')
})







