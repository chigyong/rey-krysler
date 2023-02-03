const btn = document.getElementsByClassName('menu')[0]
const profile = document.getElementsByClassName('profile')[0]

btn.addEventListener('click', () => {
    profile.classList.toggle('active')
    btn.classList.toggle('active')
})

//Animate rain 
const rain = document.getElementsByClassName('tuyu')[0];
const container = document.getElementsByClassName('container')[0];

rain.addEventListener('click', () => {
    container.classList.toggle('active')
})


